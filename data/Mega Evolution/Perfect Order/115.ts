import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Sacred Ash",
		fr: "Cendre Sacrée",
		de: "Zauberasche",
		it: "Cenere magica",
		es: "Ceniza Sagrada",
		pt: "Cinza Sagrada",
		'es-mx': "Ceniza Sagrada",
	},

	rarity: "None",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		en: "Shuffle 5 Pokémon from your discard pile into your deck.",
		fr: "Mélangez avec votre deck jusqu'à 5 Pokémon de votre pile de défausse.",
		de: "Mische bis zu 5 Pokémon aus deinem Ablagestapel in dein Deck.",
		it: "Rimischia fino a cinque Pokémon dalla tua pila degli scarti nel tuo mazzo.",
		es: "Pon hasta 5 Pokémon de tu pila de descartes en tu baraja y baraja todas las cartas.",
		pt: "Embaralhe até 5 Pokémon da sua pilha de descarte no seu baralho.",
		'es-mx': "Pon hasta 5 Pokémon de tu pila de descartes en tu baraja y baraja todas las cartas.",
	},

	regulationMark: "I",

	thirdParty: {
		tcgplayer: 684326,
	},
}

export default card