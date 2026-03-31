import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Energy Recycler",
		fr: "Recycleur d'Énergie",
		de: "Energieaufbereitung",
		it: "Riciclaggio di Energia",
		es: "Reciclaje de Energía",
		pt: "Reciclador de Energia",
		'es-mx': "Reciclaje de Energía",
	},

	rarity: "None",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		en: "Shuffle up to 5 basic Energy cards from your discard pile into your deck.",
		fr: "Mélangez jusqu'à 5 cartes Énergie de base de votre pile de défausse avec votre deck.",
		de: "Mische bis zu 5 Basis-Energiekarten aus deinem Ablagestapel in dein Deck.",
		it: "Rimischia fino a cinque carte Energia base dalla tua pila degli scarti nel tuo mazzo.",
		es: "Pon hasta 5 cartas de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
		pt: "Embaralhe até 5 cartas de Energia Básica da sua pilha de descarte no seu baralho.",
		'es-mx': "Pon hasta 5 cartas de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
	},

	regulationMark: "I",

	thirdParty: {
		tcgplayer: 684327,
	},
}

export default card