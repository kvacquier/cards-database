import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Seel",
		fr: "Otaria",
		de: "Jurob",
		it: "Seel",
		es: "Seel",
		pt: "Seel",
		'es-mx': "Seel",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	dexId: [86],

	attacks: [
	{
		cost: ["Water"],

		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
			de: "Regenplatscher",
			it: "Spruzzapioggia",
			es: "Golpe de Lluvia",
			pt: "Chuva Borrifante",
			'es-mx': "Golpe de Lluvia",
		},

		damage: 10,
	},
	{
		cost: ["Water", "Water"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			de: "Wellenplatscher",
			it: "Schizzi d'Onda",
			es: "Chapoteo Ondulante",
			pt: "Onda Borrifante",
			'es-mx': "Chapoteo Ondulante",
		},

		damage: 30,
	},
	],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684372,
	},
}

export default card