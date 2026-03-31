import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Snivy",
		fr: "Vipélierre",
		de: "Serpifeu",
		it: "Snivy",
		es: "Snivy",
		pt: "Snivy",
		'es-mx': "Snivy",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [495],

	attacks: [
	{
		cost: ["Grass"],

		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
			de: "Waghalsiger Sturmangriff",
			it: "Carica Avventata",
			es: "Carga Descuidada",
			pt: "Carga Indomável",
			'es-mx': "Carga Descuidada",
		},

		damage: 30,

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684400,
	},
}

export default card