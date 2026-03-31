import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Nosepass",
		fr: "Tarinor",
		de: "Nasgnet",
		it: "Nosepass",
		es: "Nosepass",
		pt: "Nosepass",
		'es-mx': "Nosepass",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [299],

	attacks: [
	{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Rolling Rocks",
			fr: "Rochers Roulants",
			de: "Rollende Steine",
			it: "Massi Rotolanti",
			es: "Rocas Rodantes",
			pt: "Pedras Rolantes",
			'es-mx': "Rocas Rodantes",
		},

		damage: 40,
	},
	],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684422,
	},
}

export default card