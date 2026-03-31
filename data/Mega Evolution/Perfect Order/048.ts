import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Gastly",
		fr: "Fantominus",
		de: "Nebulak",
		it: "Gastly",
		es: "Gastly",
		pt: "Gastly",
		'es-mx': "Gastly",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [92],

	attacks: [
	{
		cost: ["Darkness"],

		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
			de: "Überraschungsangriff",
			it: "Attacco a Sorpresa",
			es: "Ataque Sorpresa",
			pt: "Ataque Surpresa",
			'es-mx': "Ataque Sorpresa",
		},

		damage: 30,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684429,
	},
}

export default card