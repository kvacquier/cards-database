import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Servine",
		fr: "Lianaja",
		de: "Efoserp",
		it: "Servine",
		es: "Servine",
		pt: "Servine",
		'es-mx': "Servine",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Snivy",
		fr: "Vipélierre",
		de: "Serpifeu",
		it: "Snivy",
		es: "Snivy",
		pt: "Snivy",
		'es-mx': "Snivy",
	},
	stage: "Stage1",
	dexId: [496],

	attacks: [
	{
		cost: ["Grass"],

		name: {
			en: "Solar Cutter",
			fr: "Coupe Solaire",
			de: "Solarschneider",
			it: "Taglio Solare",
			es: "Corte Solar",
			pt: "Cortador Solar",
			'es-mx': "Corte Solar",
		},

		damage: 40,
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684401,
	},
}

export default card