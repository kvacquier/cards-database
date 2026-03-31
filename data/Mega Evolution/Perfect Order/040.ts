import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
		de: "Hippoterus",
		it: "Hippowdon",
		es: "Hippowdon",
		pt: "Hippowdon",
		'es-mx': "Hippowdon",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
		de: "Hippopotas",
		it: "Hippopotas",
		es: "Hippopotas",
		pt: "Hippopotas",
		'es-mx': "Hippopotas",
	},
	stage: "Stage1",
	dexId: [450],

	attacks: [
	{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Twister Spewing",
			fr: "Projection de Tornades",
			de: "Wirbelspeier",
			it: "Espellivortice",
			es: "Tornado Regurgitante",
			pt: "Lança Tornado",
			'es-mx': "Tornado Regurgitante",
		},

		damage: 80,

		effect: {
			en: "If you played Tarragon from your hand during this turn, discard the top 3 cards of your opponent's deck.",
			fr: "Si vous avez joué Taragon de votre main pendant ce tour, défaussez les 3 cartes du dessus du deck de votre adversaire.",
			de: "Wenn du Tarragon während dieses Zuges aus deiner Hand gespielt hast, lege die obersten 3 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Se hai giocato Tarragon dalla tua mano durante questo turno, scarta le prime tre carte del mazzo del tuo avversario.",
			es: "Si has jugado Estragón de tu mano durante este turno, descarta las 3 primeras cartas de la baraja de tu rival.",
			pt: "Se você jogou Tarragon da sua mão durante este turno, descarte as 3 cartas de cima do baralho do seu oponente.",
			'es-mx': "Si has jugado Estragón de tu mano durante este turno, descarta las 3 primeras cartas de la baraja de tu rival.",
		},
	},
	{
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			de: "Schwerer Einschlag",
			it: "Impatto Pesante",
			es: "Impacto Pesado",
			pt: "Impacto Pesado",
			'es-mx': "Impacto Pesado",
		},

		damage: 130,
	},
	],

	retreat: 4,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684426,
	},
}

export default card