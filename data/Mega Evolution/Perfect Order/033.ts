import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Espurr",
		fr: "Psystigri",
		de: "Psiau",
		it: "Espurr",
		es: "Espurr",
		pt: "Espurr",
		'es-mx': "Espurr",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [677],

	attacks: [
	{
		cost: ["Colorless"],

		name: {
			en: "Nap",
			fr: "Tit'Sieste",
			de: "Nickerchen",
			it: "Pausa",
			es: "Siesta",
			pt: "Soneca",
			'es-mx': "Siesta",
		},

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			'es-mx': "Cura 20 puntos de daño a este Pokémon.",
		},
	},
	{
		cost: ["Psychic"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			de: "Zertrampeln",
			it: "Fuggi Fuggi",
			es: "Estampida",
			pt: "Estouro",
			'es-mx': "Estampida",
		},

		damage: 10,
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684417,
	},
}

export default card