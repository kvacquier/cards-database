import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Jacinthe",
		fr: "Violine",
		de: "Violette",
		it: "Viola",
		es: "Lilette",
		pt: "Jaci",
		'es-mx': "Lilette",
	},

	rarity: "None",
	category: "Trainer",
	trainerType: "Supporter",

	effect: {
		en: "Heal 150 damage from 1 of your {P} Pokémon.",
		fr: "Soignez 150 dégâts de l'un de vos Pokémon {P}.",
		de: "Heile 150 Schadenspunkte bei 1 deiner {P}-Pokémon.",
		it: "Cura uno dei tuoi Pokémon {P} da 150 danni.",
		es: "Cura 150 puntos de daño a uno de tus Pokémon {P}.",
		pt: "Cure 150 pontos de dano de 1 dos seus Pokémon {P}.",
		'es-mx': "Cura 150 puntos de daño a uno de tus Pokémon {P}.",
	},

	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684393,
	},
}

export default card