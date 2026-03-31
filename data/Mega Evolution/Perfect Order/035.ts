import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Spritzee",
		fr: "Fluvetin",
		de: "Parfi",
		it: "Spritzee",
		es: "Spritzee",
		pt: "Spritzee",
		'es-mx': "Spritzee",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [682],

	attacks: [
	{
		cost: ["Colorless"],

		name: {
			en: "Sweet Scent",
			fr: "Doux Parfum",
			de: "Lockduft",
			it: "Profumino",
			es: "Dulce Aroma",
			pt: "Aroma Doce",
			'es-mx': "Dulce Aroma",
		},

		effect: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			fr: "Soignez 30 dégâts de l'un de vos Pokémon.",
			de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon.",
			it: "Cura uno dei tuoi Pokémon da 30 danni.",
			es: "Cura 30 puntos de daño a uno de tus Pokémon.",
			pt: "Cure 30 pontos de dano de 1 dos seus Pokémon.",
			'es-mx': "Cura 30 puntos de daño a uno de tus Pokémon.",
		},
	},
	{
		cost: ["Psychic"],

		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			it: "Carica",
			es: "Apisonar",
			pt: "Aríete",
			'es-mx': "Apisonar",
		},

		damage: 10,
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684420,
	},
}

export default card