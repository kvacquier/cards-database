import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Mawile",
		fr: "Mysdibule",
		de: "Flunkifer",
		it: "Mawile",
		es: "Mawile",
		pt: "Mawile",
		'es-mx': "Mawile",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [303],

	attacks: [
	{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Double Eater",
			fr: "Double Portion",
			de: "Doppelschmaus",
			it: "Divoratore Doppio",
			es: "Doble Ración",
			pt: "Comer em Dobro",
			'es-mx': "Doble Ración",
		},

		damage: "60×",

		effect: {
			en: "Discard up to 2 Energy cards from your hand, and this attack does 60 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu'à 2 cartes Énergie de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			de: "Lege bis zu 2 Energiekarten aus deiner Hand auf deinen Ablagestapel, und diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu.",
			it: "Scarta fino a due carte Energia dalla tua mano e questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			es: "Descarta hasta 2 cartas de Energía de tu mano, y este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			pt: "Descarte até 2 cartas de Energia da sua mão, e este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
			'es-mx': "Descarta hasta 2 cartas de Energía de tu mano, y este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
		},
	},
	],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684416,
	},
}

export default card