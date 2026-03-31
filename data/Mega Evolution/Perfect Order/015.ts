import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Salandit",
		fr: "Tritox",
		de: "Molunk",
		it: "Salandit",
		es: "Salandit",
		pt: "Salandit",
		'es-mx': "Salandit",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [757],

	attacks: [
	{
		cost: ["Fire"],

		name: {
			en: "Fire Claws",
			fr: "Griffes Enflammées",
			de: "Feuerkrallen",
			it: "Artigli Infuocati",
			es: "Garras de Fuego",
			pt: "Garras de Fogo",
			'es-mx': "Garras de Fuego",
		},

		damage: 20,
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684382,
	},
}

export default card