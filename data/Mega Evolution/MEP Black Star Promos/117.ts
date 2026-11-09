import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Kyogre",
		fr: "Kyogre",
		es: "Kyogre",
	},

	illustrator: "Nurikabe",
	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Basic",
	dexId: [382],

	attacks: [{
		name: {
			en: "Waterfall",
			fr: "Cascade",
			es: "Cascada",
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			en: "Brutal Whirlpool",
			fr: "Tourbillon Brutal",
			es: "Remolinos Brutales",
		},

		effect: {
			en: "If a Stadium that has \"Legendary\" in its name is in play, this attack also does 50 damage to each of your opponent's Benched Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Si un Stade ayant \" Légendaire \" dans son nom est en jeu, cette attaque inflige aussi 50 dégâts à chacun des Pokémon de Banc de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			es: "Si hay un Estadio en juego que tenga \"Legendario\" en su nombre, este ataque también hace 50 puntos de daño a cada uno de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca)</em>.",
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		}
	],
}

export default card
