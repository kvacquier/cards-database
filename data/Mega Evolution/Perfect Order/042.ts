import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Binacle",
		fr: "Opermine",
		de: "Bithora",
		it: "Binacle",
		es: "Binacle",
		pt: "Binacle",
		'es-mx': "Binacle",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [688],

	attacks: [
	{
		cost: ["Fighting"],

		name: {
			en: "Double Draw",
			fr: "Double Pioche",
			de: "Zweifachzug",
			it: "Pescata Doppia",
			es: "Roba Doble",
			pt: "Compra Dupla",
			'es-mx': "Roba Doble",
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			de: "Ziehe 2 Karten.",
			it: "Pesca due carte.",
			es: "Roba 2 cartas.",
			pt: "Compre 2 cartas.",
			'es-mx': "Roba 2 cartas.",
		},
	},
	{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			it: "Graffio",
			es: "Arañazo",
			pt: "Arranhão",
			'es-mx': "Arañazo",
		},

		damage: 30,
	},
	],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684334,
	},
}

export default card