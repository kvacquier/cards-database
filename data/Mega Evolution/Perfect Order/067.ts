import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Furfrou",
		fr: "Couafarel",
		de: "Coiffwaff",
		it: "Furfrou",
		es: "Furfrou",
		pt: "Furfrou",
		'es-mx': "Furfrou",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [676],

	attacks: [
	{
		cost: ["Colorless"],

		name: {
			en: "Hand Trim",
			fr: "Réduction de Main",
			de: "Handschnitt",
			it: "Sfoltimano",
			es: "Recorte de Mano",
			pt: "Tosa Manual",
			'es-mx': "Recorte de Mano",
		},

		effect: {
			en: "Discard random cards from your opponent's hand until they have 5 cards in their hand.",
			fr: "Défaussez au hasard des cartes de la main de votre adversaire jusqu'à ce qu'il reste 5 cartes dans sa main.",
			de: "Lege so lange zufällige Karten aus der Hand deines Gegners auf seinen Ablagestapel, bis er 5 Karten auf seiner Hand hat.",
			it: "Scarta delle carte a caso dalla mano del tuo avversario fino a lasciarlo con cinque carte in mano.",
			es: "Descarta cartas aleatorias de la mano de tu rival hasta que tenga 5 cartas en su mano.",
			pt: "Descarte cartas aleatórias da mão do seu oponente até que ele tenha 5 cartas na mão dele.",
			'es-mx': "Descarta cartas aleatorias de la mano de tu rival hasta que tenga 5 cartas en su mano.",
		},
	},
	{
		cost: ["Colorless"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			de: "Kopfnuss",
			it: "Bottintesta",
			es: "Golpe Cabeza",
			pt: "Cabeçada",
			'es-mx': "Golpe Cabeza",
		},

		damage: 30,
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684443,
	},
}

export default card