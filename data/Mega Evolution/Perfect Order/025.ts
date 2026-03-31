import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Volcanion",
		fr: "Volcanion",
		de: "Volcanion",
		it: "Volcanion",
		es: "Volcanion",
		pt: "Volcanion",
		'es-mx': "Volcanion",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",
	dexId: [721],

	attacks: [
	{
		cost: ["Water", "Colorless"],

		name: {
			en: "Strength",
			fr: "Force",
			de: "Stärke",
			it: "Forza",
			es: "Fuerza",
			pt: "Força",
			'es-mx': "Fuerza",
		},

		damage: 50,
	},
	{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Powerful Steam",
			fr: "Vapeur Puissante",
			de: "Mächtiger Dampf",
			it: "Forzavapore",
			es: "Vapor Poderoso",
			pt: "Vaporderoso",
			'es-mx': "Vapor Poderoso",
		},

		damage: "90×",

		effect: {
			en: "Flip a coin for each {W} Energy attached to this Pokémon. This attack does 90 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie {W} attachée à ce Pokémon. Cette attaque inflige 90 dégâts pour chaque côté face.",
			de: "Wirf 1 Münze für jede an dieses Pokémon angelegte {W}-Energie. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta per ogni Energia {W} assegnata a questo Pokémon. Questo attacco infligge 90 danni ogni volta che esce testa.",
			es: "Lanza 1 moneda por cada Energía {W} unida a este Pokémon. Este ataque hace 90 puntos de daño por cada cara.",
			pt: "Jogue uma moeda para cada Energia {W} ligada a este Pokémon. Este ataque causa 90 pontos de dano para cada cara.",
			'es-mx': "Lanza 1 moneda por cada Energía {W} unida a este Pokémon. Este ataque hace 90 puntos de daño por cada cara.",
		},
	},
	],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684408,
	},
}

export default card