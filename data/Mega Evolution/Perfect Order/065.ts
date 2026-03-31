import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Diggersby",
		fr: "Excavarenne",
		de: "Grebbit",
		it: "Diggersby",
		es: "Diggersby",
		pt: "Diggersby",
		'es-mx': "Diggersby",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		en: "Bunnelby",
		fr: "Sapereau",
		de: "Scoppel",
		it: "Bunnelby",
		es: "Bunnelby",
		pt: "Bunnelby",
		'es-mx': "Bunnelby",
	},
	stage: "Stage1",
	dexId: [660],

	attacks: [
	{
		cost: ["Colorless"],

		name: {
			en: "Earthquake",
			fr: "Séisme",
			de: "Erdbeben",
			it: "Terremoto",
			es: "Terremoto",
			pt: "Terremoto",
			'es-mx': "Terremoto",
		},

		damage: 140,

		effect: {
			en: "This attack also does 30 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			es: "Este ataque también hace 30 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 30 pontos de dano a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque también hace 30 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
		},
	},
	{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Whap Down",
			fr: "Assommer",
			de: "Verdreschen",
			it: "Bastonata",
			es: "Zurrar",
			pt: "Golpe Ligeiro",
			'es-mx': "Zurrar",
		},

		damage: 100,
	},
	],

	retreat: 4,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684442,
	},
}

export default card