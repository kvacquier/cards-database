import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Shaymin",
		fr: "Shaymin",
		de: "Shaymin",
		it: "Shaymin",
		es: "Shaymin",
		pt: "Shaymin",
		'es-mx': "Shaymin",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [492],

	attacks: [
	{
		cost: ["Grass"],

		name: {
			en: "Send Flowers",
			fr: "Envoi de Fleurs",
			de: "Blumen schicken",
			it: "Mandafiori",
			es: "Enviar Flores",
			pt: "Mandar Flores",
			'es-mx': "Enviar Flores",
		},

		effect: {
			en: "Search your deck for an Energy card and attach it to 1 of your Benched {G} Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie, puis attachez-la à l'un de vos Pokémon {G} de Banc. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Energiekarte und lege sie an 1 {G}-Pokémon auf deiner Bank an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Energia e assegnala a uno dei Pokémon {G} nella tua panchina. Poi rimischia il tuo mazzo.",
			es: "Busca en tu baraja 1 carta de Energía y únela a uno de tus Pokémon {G} en Banca. Después, baraja las cartas de tu baraja.",
			pt: "Procure por uma carta de Energia no seu baralho e ligue-a a 1 dos seus Pokémon {G} no Banco. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu baraja 1 carta de Energía y únela a uno de tus Pokémon {G} en Banca. Después, baraja las cartas de tu baraja.",
		},
	},
	{
		cost: ["Grass"],

		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
			de: "Blattschritt",
			it: "Passofoglia",
			es: "Paso Hoja",
			pt: "Passo de Folha",
			'es-mx': "Paso Hoja",
		},

		damage: 30,
	},
	],

	retreat: 0,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684399,
	},
}

export default card