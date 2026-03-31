import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Scatterbug",
		fr: "Lépidonille",
		de: "Purmel",
		it: "Scatterbug",
		es: "Scatterbug",
		pt: "Scatterbug",
		'es-mx': "Scatterbug",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",
	dexId: [664],

	attacks: [
	{
		cost: ["Grass"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			de: "Nagen",
			it: "Rosicchiamento",
			es: "Roer",
			pt: "Roída",
			'es-mx': "Roer",
		},

		damage: 20,
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684363,
	},
}

export default card