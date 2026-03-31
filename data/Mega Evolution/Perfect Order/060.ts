import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Rattata",
		fr: "Rattata",
		de: "Rattfratz",
		it: "Rattata",
		es: "Rattata",
		pt: "Rattata",
		'es-mx': "Rattata",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [19],

	attacks: [
	{
		cost: ["Colorless"],

		name: {
			en: "Take Down",
			fr: "Bélier",
			de: "Bodycheck",
			it: "Riduttore",
			es: "Derribo",
			pt: "Desmantelar",
			'es-mx': "Derribo",
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
		tcgplayer: 684437,
	},
}

export default card