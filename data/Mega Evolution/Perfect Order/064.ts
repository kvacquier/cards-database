import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Bunnelby",
		fr: "Sapereau",
		de: "Scoppel",
		it: "Bunnelby",
		es: "Bunnelby",
		pt: "Bunnelby",
		'es-mx': "Bunnelby",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [659],

	attacks: [
	{
		cost: ["Colorless"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			de: "Schmetterkick",
			it: "Calcio Esplosivo",
			es: "Patada Destrucción",
			pt: "Chute Poderoso",
			'es-mx': "Patada Destrucción",
		},

		damage: 10,
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684441,
	},
}

export default card