import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Fletchling",
		fr: "Passerouge",
		de: "Dartiri",
		it: "Fletchling",
		es: "Fletchling",
		pt: "Fletchling",
		'es-mx': "Fletchling",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [661],

	attacks: [
	{
		cost: ["Colorless"],

		name: {
			en: "Chirp",
			fr: "Gazouillis",
			de: "Zwitscherer",
			it: "Cinguettio",
			es: "Gorjeo",
			pt: "Gorjeio",
			'es-mx': "Gorjeo",
		},

		effect: {
			en: "Search your deck for up to 2 Pokémon with {F} Resistance, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon avec une Résistance à {F}, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Pokémon mit {F}-Resistenz, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due Pokémon con resistenza al tipo {F}, mostrali e aggiungili alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			es: "Busca en tu baraja hasta 2 Pokémon con Resistencia a {F}, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 2 Pokémon com Resistência {F} no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu baraja hasta 2 Pokémon con Resistencia a {F}, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
		},
	},
	{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Peck",
			fr: "Picpic",
			de: "Pikser",
			it: "Beccata",
			es: "Picotazo",
			pt: "Bicada",
			'es-mx': "Picotazo",
		},

		damage: 20,
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684403,
	},
}

export default card