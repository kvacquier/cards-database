import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Staryu",
		fr: "Stari",
		de: "Sterndu",
		it: "Staryu",
		es: "Staryu",
		pt: "Staryu",
		'es-mx': "Staryu",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [120],

	attacks: [
	{
		cost: ["Water"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			de: "Aquaknarre",
			it: "Pistolacqua",
			es: "Pistola Agua",
			pt: "Revólver d'Água",
			'es-mx': "Pistola Agua",
		},

		damage: 20,
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684374,
	},
}

export default card