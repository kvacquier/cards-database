import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Honedge",
		fr: "Monorpale",
		de: "Gramokles",
		it: "Honedge",
		es: "Honedge",
		pt: "Honedge",
		'es-mx': "Honedge",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",
	dexId: [679],

	attacks: [
	{
		cost: ["Colorless"],

		name: {
			en: "Cut",
			fr: "Coupe",
			de: "Zerschneider",
			it: "Taglio",
			es: "Corte",
			pt: "Cortar",
			'es-mx': "Corte",
		},

		damage: 10,
	},
	],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684378,
	},
}

export default card