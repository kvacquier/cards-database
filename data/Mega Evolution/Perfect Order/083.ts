import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Potion",
		fr: "Potion",
		de: "Trank",
		it: "Pozione",
		es: "Poción",
		pt: "Poção",
		'es-mx': "Poción",
	},

	rarity: "None",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		en: "Heal 30 damage from 1 of your Pokémon.",
		fr: "Soignez 30 dégâts de l'un de vos Pokémon.",
		de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon.",
		it: "Cura uno dei tuoi Pokémon da 30 danni.",
		es: "Cura 30 puntos de daño a uno de tus Pokémon.",
		pt: "Cure 30 pontos de dano de 1 dos seus Pokémon.",
		'es-mx': "Cura 30 puntos de daño a uno de tus Pokémon.",
	},

	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684320,
	},
}

export default card