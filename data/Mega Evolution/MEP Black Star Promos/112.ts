import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Magmortar",
		fr: "Maganon",
		es: "Magmortar",
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Promo",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",
	dexId: [126],

	abilities: [{
		type: "Ability",

		name: {
			en: "Buddy Boost",
			fr: "Boost Partenaire",
			es: "Impulso Amigo",
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Attach a Basic Fire Energy card, a Basic Lightning Energy card, or 1 of each from your hand to your Electivire and Magmortar in any way you like.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Attachez une carte Énergie Fire de base, une carte Énergie Lightning de base, ou une de chaque de votre main à vos Élekable et Maganon comme il vous plaît.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Une 1 carta de Energía Fire Básica, 1 carta de Energía Lightning Básica o 1 de cada una de tu mano a tus Electivire y Magmortar de la manera que desees.",
		}
	}],

	attacks: [{
		name: {
			en: "Heat Crash",
			fr: "Tacle Feu",
			es: "Golpe Calor",
		},

		damage: 80,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			stamp: ["set-logo","pokemon-center"]
		},
		{
			type: "holo",
			stamp: ["set-logo","staff"]
		}
	],
}

export default card
