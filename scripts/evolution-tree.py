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

STAGES_AUTO_EVOLVE_FROM = frozenset({"Stage1", "Stage2"})

# English "Mega … ex" → inner species name (e.g. Mega Starmie ex → Starmie)
MEGA_EX_EN_RE = re.compile(r"^Mega\s+(.+)\s+ex$", re.IGNORECASE)

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


def _strip_ex_suffix_english(name_en: str) -> str | None:
    """Strip trailing ' ex' (any case) only, e.g. Charizard ex → Charizard."""
    s = name_en.strip()
    if not s:
        return None
    s = re.sub(r"\s+ex$", "", s, flags=re.IGNORECASE).strip()
    return s or None


def _ts_object_key(key: str) -> str:
    if re.match(r"^[A-Za-z_]\w*$", key):
        return key
    return f"'{key}'"


def _escape_ts_string(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def _format_evolve_from_block(names: dict[str, str]) -> str:
    keys = sorted(names.keys(), key=lambda k: (0 if k == "en" else 1, k))
    lines = ["\tevolveFrom: {"]
    for k in keys:
        lines.append(f"\t\t{_ts_object_key(k)}: \"{_escape_ts_string(names[k])}\",")
    lines.append("\t},")
    return "\n".join(lines)


def _find_insert_index_after_name_block(source: str) -> int | None:
    m = re.search(r"^\s*name:\s*\{", source, re.MULTILINE)
    if not m:
        return None
    i = m.end() - 1
    if i < 0 or source[i] != "{":
        return None
    depth = 0
    while i < len(source):
        c = source[i]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                i += 1
                while i < len(source) and source[i] in " \t":
                    i += 1
                if i < len(source) and source[i] == ",":
                    i += 1
                return i
        i += 1
    return None


def _find_evolve_from_property_span(source: str) -> tuple[int, int] | None:
    """Start/end indices of the full `evolveFrom: { ... },` property (end after comma)."""
    m = re.search(r"^\s*evolveFrom:\s*\{", source, re.MULTILINE)
    if not m:
        return None
    start = m.start()
    i = m.end() - 1
    if i < 0 or source[i] != "{":
        return None
    depth = 0
    while i < len(source):
        c = source[i]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                i += 1
                while i < len(source) and source[i] in " \t":
                    i += 1
                if i < len(source) and source[i] == ",":
                    i += 1
                return (start, i)
        i += 1
    return None


def apply_decorated_name_evolve_fixes(
    card_pairs: list[tuple[Path, dict]],
    species_map: dict[str, dict],
) -> list[Path]:
    """
    Stage1/Stage2 repair rules (Mega … ex and non-Mega … ex):
    Strip Mega / trailing ex to get the English species key (e.g. Starmie, Charizard).
    Set evolveFrom from that species' merged evolve_from_names (e.g. Staryu, Charmeleon),
    not from its printed card names — ex and Mega-ex stages follow the same chain as
    the non-ex Stage1/Stage2 species.
    """
    fixed: list[Path] = []
    for path, card in card_pairs:
        if card.get("stage") not in STAGES_AUTO_EVOLVE_FROM:
            continue
        name = card.get("name") or {}
        en = name.get("en")
        if not en:
            continue
        en_stripped = en.strip()

        mega_m = MEGA_EX_EN_RE.match(en_stripped)
        if mega_m:
            lookup_key = mega_m.group(1).strip()
        else:
            lookup_key = _strip_ex_suffix_english(en_stripped) or ""
            if not lookup_key or lookup_key.casefold() == en_stripped.casefold():
                continue

        if lookup_key not in species_map:
            continue
        parent_ef = species_map[lookup_key].get("evolve_from_names")
        if not parent_ef:
            continue
        cur = card.get("evolveFrom")
        if cur:
            cur_en = (cur.get("en") or "").strip()
            if cur_en.casefold() != lookup_key.casefold():
                continue
        payload = dict(parent_ef)
        if mega_m:
            action = "Mega ex → inner species' evolveFrom"
        else:
            action = f"ex variant (from {lookup_key!r} species' evolveFrom)"

        try:
            source = path.read_text(encoding="utf-8")
        except OSError as e:
            print(f"Warning: could not read {path}: {e}", file=sys.stderr)
            continue

        block = _format_evolve_from_block(payload)
        span = _find_evolve_from_property_span(source)
        if span is not None:
            new_source = source[: span[0]] + block + source[span[1] :]
        else:
            insert_at = _find_insert_index_after_name_block(source)
            if insert_at is None:
                print(f"Warning: could not find name block in {path}", file=sys.stderr)
                continue
            new_source = source[:insert_at] + "\n" + block + source[insert_at:]

        if new_source == source:
            continue
        try:
            path.write_text(new_source, encoding="utf-8")
        except OSError as e:
            print(f"Warning: could not write {path}: {e}", file=sys.stderr)
            continue

        fixed.append(path)
        print(f"Fixed evolveFrom ({action}): {path}")

    return fixed


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


# --- Pipeline passes ---


def pass_scan_and_repair(
    dirs: list[Path],
    *,
    auto_evolve_from: bool,
) -> tuple[list[tuple[Path, dict]], dict[str, dict]]:
    """
    Pass 1: Discover and parse all Pokémon cards, then repair evolveFrom on disk
    when enabled (Mega … ex and … ex use the stripped species key's evolve chain,
    e.g. Charizard ex → Charmeleon, Mega Starmie ex → Staryu).
    """
    print("=== Pass 1: Scan ===")
    files = discover_card_files(dirs)
    if not files:
        print("No card files found.", file=sys.stderr)
        sys.exit(1)

    pairs: list[tuple[Path, dict]] = []
    for f in files:
        card = parse_card_file(f)
        if card:
            pairs.append((f, card))

    print(f"  Files scanned: {len(files)}")
    print(f"  Pokémon cards parsed: {len(pairs)}")

    species_map = build_species_map([c for _, c in pairs])
    print(f"  Unique species (English key): {len(species_map)}")

    print("=== Pass 1: Repair (evolveFrom) ===")
    if not auto_evolve_from:
        print("  Skipped (--no-auto-evolve-from / --no-fix-mega-ex).")
        return pairs, species_map

    fixed_paths = apply_decorated_name_evolve_fixes(pairs, species_map)
    if not fixed_paths:
        print("  No cards needed evolveFrom repair.")
        return pairs, species_map

    fixed_set = set(fixed_paths)
    for i, (p, _) in enumerate(pairs):
        if p in fixed_set:
            updated = parse_card_file(p)
            if updated:
                pairs[i] = (p, updated)
    species_map = build_species_map([c for _, c in pairs])
    print(f"  Patched {len(fixed_paths)} card file(s); species map rebuilt.")
    return pairs, species_map


def pass_fill_tree(
    species_map: dict[str, dict],
    *,
    include_standalone: bool,
) -> tuple[list[dict], int, int]:
    """
    Pass 2: Resolve parent links from evolveFrom, find roots, build nested tree nodes.
    Returns (tree, chain_count, orphan_root_count).
    """
    print("=== Pass 2: Fill tree ===")
    name_lookup = build_name_lookup(species_map)
    children_map, orphan_roots = resolve_parents(species_map, name_lookup)

    natural_roots = {
        key for key, sp in species_map.items()
        if sp["evolve_from_names"] is None and key in children_map
    }
    all_roots = natural_roots | orphan_roots

    if include_standalone:
        standalone = {
            key for key, sp in species_map.items()
            if sp["stage"] == "Basic"
            and key not in children_map
            and sp["evolve_from_names"] is None
        }
        all_roots |= standalone

    tree = [
        build_node(key, species_map, children_map, frozenset())
        for key in sorted(all_roots)
    ]

    chains = len(natural_roots) + len(orphan_roots)
    print(f"  Evolution chains: {chains} ({len(orphan_roots)} orphan root(s))")
    print(f"  Tree roots: {len(tree)}")
    return tree, chains, len(orphan_roots)


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
    parser.add_argument(
        "--no-auto-evolve-from",
        action="store_true",
        help="Do not patch evolveFrom from Mega/ex name → species evolve chain (Stage1/Stage2)",
    )
    parser.add_argument(
        "--no-fix-mega-ex",
        action="store_true",
        help=argparse.SUPPRESS,
    )
    args = parser.parse_args()

    dirs = [Path(d) for d in args.dirs] if args.dirs else DEFAULT_DIRS

    skip_auto = args.no_auto_evolve_from or args.no_fix_mega_ex
    pairs, species_map = pass_scan_and_repair(
        dirs,
        auto_evolve_from=not skip_auto,
    )

    tree, _, _ = pass_fill_tree(
        species_map,
        include_standalone=args.include_standalone,
    )

    output_path = Path(args.output)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(tree, f, ensure_ascii=False, indent=2)

    print(f"Output written to: {output_path}")


if __name__ == "__main__":
    main()
