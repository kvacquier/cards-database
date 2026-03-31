import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Rowlet",
		fr: "Brindibou",
		de: "Bauz",
		it: "Rowlet",
		es: "Rowlet",
		pt: "Rowlet",
		'es-mx': "Rowlet",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",
	dexId: [722],

	attacks: [
	{
		cost: ["Grass"],

		name: {
			en: "Find a Friend",
			fr: "Trouver un Ami",
			de: "Freunde finden",
			it: "Trovamico",
			es: "Encontrar un Amigo",
			pt: "Encontre um Amigo",
			'es-mx': "Encontrar un Amigo",
		},

		effect: {
			en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			es: "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por um Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		},
	},
	{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			it: "Azione",
			es: "Placaje",
			pt: "Investida",
			'es-mx': "Placaje",
		},

		damage: 30,
	},
	],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684367,
	},
}

export default card