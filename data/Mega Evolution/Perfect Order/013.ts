import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Fletchinder",
		fr: "Braisillon",
		de: "Dartignis",
		it: "Fletchinder",
		es: "Fletchinder",
		pt: "Fletchinder",
		'es-mx': "Fletchinder",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		en: "Fletchling",
		fr: "Passerouge",
		de: "Dartiri",
		it: "Fletchling",
		es: "Fletchling",
		pt: "Fletchling",
		'es-mx': "Fletchling",
	},
	stage: "Stage1",
	dexId: [662],

	attacks: [
	{
		cost: ["Fire", "Fire"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			de: "Flackern",
			it: "Fiammata",
			es: "Llama",
			pt: "Chama",
			'es-mx': "Llama",
		},

		damage: 60,
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684404,
	},
}

export default card