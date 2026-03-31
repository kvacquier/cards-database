import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Shinx",
		fr: "Lixy",
		de: "Sheinux",
		it: "Shinx",
		es: "Shinx",
		pt: "Shinx",
		'es-mx': "Shinx",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [403],

	attacks: [
	{
		cost: ["Lightning"],

		name: {
			en: "Double Scratch",
			fr: "Double Écorchure",
			de: "Doppelkratzer",
			it: "Doppio Graffio",
			es: "Arañazo Doble",
			pt: "Arranhão Duplo",
			'es-mx': "Arañazo Doble",
		},

		damage: "10×",

		effect: {
			en: "Flip 2 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			pt: "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684409,
	},
}

export default card