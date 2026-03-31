#!/usr/bin/env python3
"""Build a Pokémon evolution tree from card .ts files and export it as JSON."""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from collections import defaultdict
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent.parent

DEFAULT_DIRS = [
    PROJECT_ROOT / "data" / "Scarlet & Violet",
    PROJECT_ROOT / "data" / "Mega Evolution",
]
DEFAULT_OUTPUT = PROJECT_ROOT / "evolution-tree.json"

# --- Regex patterns ---

CATEGORY_RE = re.compile(r'^\s*category:\s*"([^"]+)"', re.MULTILINE)
STAGE_RE = re.compile(r'^\s*stage:\s*"([^"]+)"', re.MULTILINE)

# Matches a shallow multilingual block: name: { en: "Foo", fr: "Bar" }
# [^}]* is safe because multilingual objects have no nested braces
BLOCK_RE_TEMPLATE = r'^\s*{field}:\s*\{{([^}}]*)\}}'

# Matches both bare keys (en:) and quoted keys ('es-mx':)
LANG_PAIR_RE = re.compile(r"""(?:'([^']+)'|([\w][\w-]*))\s*:\s*"([^"]*)" """, re.VERBOSE)


# --- Parsing ---

def _extract_block(field: str, source: str) -> str | None:
    pattern = re.compile(BLOCK_RE_TEMPLATE.format(field=field), re.MULTILINE | re.DOTALL)
    m = pattern.search(source)
    return m.group(1) if m else None


def _parse_multilingual(block: str) -> dict[str, str]:
    result = {}
    for m in LANG_PAIR_RE.finditer(block):
        key = m.group(1) or m.group(2)  # quoted key ('es-mx') or bare key (en)
        result[key] = m.group(3)
    return result


def parse_card_file(path: Path) -> dict | None:
    try:
        source = path.read_text(encoding="utf-8")
    except OSError:
        return None

    cm = CATEGORY_RE.search(source)
    if not cm or cm.group(1) != "Pokemon":
        return None

    name_block = _extract_block("name", source)
    if not name_block:
        return None
    name = _parse_multilingual(name_block)
    if not name:
        return None

    sm = STAGE_RE.search(source)
    stage = sm.group(1) if sm else None

    evolve_from = None
    ef_block = _extract_block("evolveFrom", source)
    if ef_block:
        evolve_from = _parse_multilingual(ef_block) or None

    return {"name": name, "evolveFrom": evolve_from, "stage": stage}


# --- File discovery ---

def discover_card_files(dirs: list[Path]) -> list[Path]:
    """Return .ts card files at exactly depth 2 inside each dir."""
    files = []
    for root_dir in dirs:
        if not root_dir.is_dir():
            print(f"Warning: directory not found: {root_dir}", file=sys.stderr)
            continue
        for dirpath, _, filenames in os.walk(root_dir):
            rel = Path(dirpath).relative_to(root_dir)
            if len(rel.parts) != 1:
                continue
            for fname in filenames:
                if fname.endswith(".ts"):
                    files.append(Path(dirpath) / fname)
    return files


# --- Species deduplication ---

def build_species_map(cards: list[dict]) -> dict[str, dict]:
    """
    Deduplicate cards into species by English name (fallback: first lang value).
    Each species: { key, names, evolve_from_names, stage }
    """
    species_map: dict[str, dict] = {}

    for card in cards:
        name = card["name"]
        key = name.get("en") or next(iter(name.values()))

        if key not in species_map:
            species_map[key] = {
                "key": key,
                "names": dict(name),
                "evolve_from_names": dict(card["evolveFrom"]) if card["evolveFrom"] else None,
                "stage": card["stage"],
            }
        else:
            sp = species_map[key]
            # Merge additional language names
            sp["names"].update(name)
            # Merge evolveFrom names
            if card["evolveFrom"]:
                if sp["evolve_from_names"] is None:
                    sp["evolve_from_names"] = dict(card["evolveFrom"])
                else:
                    sp["evolve_from_names"].update(card["evolveFrom"])
            # Keep first non-None stage
            if sp["stage"] is None and card["stage"]:
                sp["stage"] = card["stage"]

    return species_map


# --- Name lookup ---

def build_name_lookup(species_map: dict[str, dict]) -> dict[tuple[str, str], str]:
    """(lang, name_value) -> species_key for all languages in all species."""
    lookup: dict[tuple[str, str], str] = {}
    for key, sp in species_map.items():
        for lang, val in sp["names"].items():
            lookup[(lang, val)] = key
    return lookup


# --- Parent resolution ---

def resolve_parents(
    species_map: dict[str, dict],
    name_lookup: dict[tuple[str, str], str],
) -> tuple[dict[str, list[str]], set[str]]:
    """
    Returns:
      children_map: parent_key -> [child_key, ...]
      orphan_roots: species whose evolveFrom parent is not in scanned data
    """
    children_map: dict[str, list[str]] = defaultdict(list)
    orphan_roots: set[str] = set()

    for key, sp in species_map.items():
        ef = sp["evolve_from_names"]
        if not ef:
            continue

        parent_key = None
        langs_to_try = ["en"] + [l for l in ef if l != "en"]
        for lang in langs_to_try:
            val = ef.get(lang)
            if val:
                parent_key = name_lookup.get((lang, val))
                if parent_key:
                    break

        if parent_key:
            children_map[parent_key].append(key)
        else:
            orphan_roots.add(key)

    return dict(children_map), orphan_roots


# --- Tree building ---

def build_node(
    key: str,
    species_map: dict[str, dict],
    children_map: dict[str, list[str]],
    visited: frozenset[str],
) -> dict:
    if key in visited:
        sp = species_map[key]
        return {"name": sp["names"], "stage": sp["stage"], "evolvesInto": [], "_circular": True}

    visited = visited | {key}
    sp = species_map[key]
    children = [
        build_node(c, species_map, children_map, visited)
        for c in sorted(children_map.get(key, []))
    ]
    return {"name": sp["names"], "stage": sp["stage"], "evolvesInto": children}


# --- Main ---

def main() -> None:
    parser = argparse.ArgumentParser(
        description="Build a Pokémon evolution tree from card .ts files."
    )
    parser.add_argument(
        "dirs",
        nargs="*",
        help="Directories to scan (default: data/Scarlet & Violet and data/Mega Evolution)",
    )
    parser.add_argument(
        "-o", "--output",
        default=str(DEFAULT_OUTPUT),
        help="Output JSON file path (default: evolution-tree.json)",
    )
    parser.add_argument(
        "--include-standalone",
        action="store_true",
        help="Include Basic Pokémon with no evolutions",
    )
    args = parser.parse_args()

    dirs = [Path(d) for d in args.dirs] if args.dirs else DEFAULT_DIRS

    # 1. Discover and parse
    files = discover_card_files(dirs)
    if not files:
        print("No card files found.", file=sys.stderr)
        sys.exit(1)

    cards = []
    for f in files:
        card = parse_card_file(f)
        if card:
            cards.append(card)

    print(f"Scanned {len(files)} files, parsed {len(cards)} Pokémon cards.")

    # 2. Deduplicate into species
    species_map = build_species_map(cards)
    print(f"Found {len(species_map)} unique Pokémon species.")

    # 3. Build name lookup
    name_lookup = build_name_lookup(species_map)

    # 4. Resolve parent links
    children_map, orphan_roots = resolve_parents(species_map, name_lookup)

    # 5. Find roots
    natural_roots = {
        key for key, sp in species_map.items()
        if sp["evolve_from_names"] is None and key in children_map
    }
    all_roots = natural_roots | orphan_roots

    if args.include_standalone:
        standalone = {
            key for key, sp in species_map.items()
            if sp["stage"] == "Basic"
            and key not in children_map
            and sp["evolve_from_names"] is None
        }
        all_roots |= standalone

    # 6. Build tree
    tree = [
        build_node(key, species_map, children_map, frozenset())
        for key in sorted(all_roots)
    ]

    # 7. Write output
    output_path = Path(args.output)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(tree, f, ensure_ascii=False, indent=2)

    chains = len(natural_roots) + len(orphan_roots)
    print(f"Built {chains} evolution chain(s) ({len(orphan_roots)} orphan root(s)).")
    print(f"Output written to: {output_path}")


if __name__ == "__main__":
    main()
