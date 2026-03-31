import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Hole-Digging Shovel",
		fr: "Pelle à Creuser des Trous",
		de: "Buddelschaufel",
		it: "Pala Scavabuche",
		es: "Pala Cavahoyos",
		pt: "Pá de Cavar",
		'es-mx': "Pala Cavahoyos",
	},

	rarity: "None",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		en: "Discard the top 2 cards of your deck.",
		fr: "Défaussez les 2 cartes du dessus de votre deck.",
		de: "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel.",
		it: "Scarta le prime due carte del tuo mazzo.",
		es: "Descarta las 2 primeras cartas de tu baraja.",
		pt: "Descarte as 2 cartas de cima do seu baralho.",
		'es-mx': "Descarta las 2 primeras cartas de tu baraja.",
	},

	regulationMark: "I",

	thirdParty: {
		tcgplayer: 684330,
	},
}

export default card