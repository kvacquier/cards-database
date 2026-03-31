import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Tyrunt",
		fr: "Ptyranidur",
		de: "Balgoras",
		it: "Tyrunt",
		es: "Tyrunt",
		pt: "Tyrunt",
		'es-mx': "Tyrunt",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",
	dexId: [696],

	attacks: [
	{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Get Angry",
			fr: "Coléreux",
			de: "Rotsehen",
			it: "Tutte le Furie",
			es: "Enfadarse",
			pt: "Dar Piti",
			'es-mx': "Enfadarse",
		},

		damage: "20×",

		effect: {
			en: "This attack does 20 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu.",
			it: "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
			es: "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			pt: "Este ataque causa 20 pontos de dano para cada contador de dano neste Pokémon.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
		},
	},
	],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684358,
	},
}

export default card