import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Wondrous Patch",
		fr: "Fortifiant Merveilleux",
		de: "Wunderpflaster",
		it: "Distintivo Meraviglioso",
		es: "Refuerzo Prodigioso",
		pt: "Fragmento Encantado",
		'es-mx': "Refuerzo Prodigioso",
	},

	rarity: "None",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		en: "Attach a Basic {P} Energy card from your discard pile to 1 of your Benched {P} Pokémon.",
		fr: "Attachez une carte Énergie {P} de base de votre pile de défausse à l'un de vos Pokémon {P} de Banc.",
		de: "Lege 1 Basis-{P}-Energiekarte aus deinem Ablagestapel an 1 {P}-Pokémon auf deiner Bank an.",
		it: "Assegna a uno dei Pokémon {P} nella tua panchina una carta Energia base {P} dalla tua pila degli scarti.",
		es: "Une 1 carta de Energía {P} Básica de tu pila de descartes a uno de tus Pokémon {P} en Banca.",
		pt: "Ligue uma carta de Energia {P} Básica da sua pilha de descarte a 1 dos seus Pokémon {P} no Banco.",
		'es-mx': "Une 1 carta de Energía {P} Básica de tu pila de descartes a uno de tus Pokémon {P} en Banca.",
	},

	regulationMark: "I",

	thirdParty: {
		tcgplayer: 684331,
	},
}

export default card