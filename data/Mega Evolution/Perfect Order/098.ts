import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Doublade",
		fr: "Dimoclès",
		de: "Duokles",
		it: "Doublade",
		es: "Doublade",
		pt: "Doublade",
		'es-mx': "Doublade",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
		de: "Gramokles",
		it: "Honedge",
		es: "Honedge",
		pt: "Honedge",
		'es-mx': "Honedge",
	},
	stage: "Stage1",
	dexId: [680],

	attacks: [
	{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Weaponized Swords",
			fr: "Épées Armes",
			de: "Kollektive Klingenkraft",
			it: "Spade Belliche",
			es: "Espadas Pertrechadas",
			pt: "Espadas Armadas",
			'es-mx': "Espadas Pertrechadas",
		},

		damage: "60×",

		effect: {
			en: "Reveal any number of Honedge, Doublade, and Aegislash from your hand, and this attack does 60 damage for each card you revealed in this way.",
			fr: "Montrez le nombre voulu de Monorpale, de Dimoclès et d'Exagide de votre main. Cette attaque inflige 60 dégâts pour chaque carte montrée de cette façon.",
			de: "Zeige deinem Gegner beliebig viele Gramokles, Duokles und Durengard auf deiner Hand, und diese Attacke fügt für jede auf diese Weise gezeigte Karte 60 Schadenspunkte zu.",
			it: "Mostra un numero qualsiasi di Honedge, Doublade e Aegislash che hai in mano e questo attacco infligge 60 danni per ogni carta che hai mostrato in questo modo.",
			es: "Enseña cualquier cantidad de Honedge, Doublade y Aegislash de tu mano, y este ataque hace 60 puntos de daño por cada carta que hayas enseñado de esta manera.",
			pt: "Revele qualquer número de Honedge, Doublade e Aegislash na sua mão, e este ataque causa 60 pontos de dano para cada carta revelada desta forma.",
			'es-mx': "Enseña cualquier cantidad de Honedge, Doublade y Aegislash de tu mano, y este ataque hace 60 puntos de daño por cada carta que hayas enseñado de esta manera.",
		},
	},
	],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684380,
	},
}

export default card