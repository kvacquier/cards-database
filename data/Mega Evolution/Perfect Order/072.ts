import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Energy Search",
		fr: "Recherche d'Énergie",
		de: "Energiesuche",
		it: "Ricerca di Energia",
		es: "Búsqueda de Energía",
		pt: "Busca de Energia",
		'es-mx': "Búsqueda de Energía",
	},

	rarity: "None",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		en: "Search your deck for a Basic Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck une carte Énergie de base, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		de: "Durchsuche dein Deck nach 1 Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
		it: "Cerca nel tuo mazzo una carta Energia base, mostrala e aggiungila alle carte che hai in mano. Poi rimischia il tuo mazzo.",
		es: "Busca en tu baraja 1 carta de Energía Básica, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		pt: "Procure por uma carta de Energia Básica no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
		'es-mx': "Busca en tu baraja 1 carta de Energía Básica, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
	},

	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684322,
	},
}

export default card