import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Charizard X ex",
		fr: "Méga-Dracaufeu X-ex",
		de: "Mega-Glurak X-ex",
		it: "Mega Charizard X-ex",
		es: "Mega-Charizard X ex",
		pt: "Mega Charizard X ex",
		'es-mx': "Mega Charizard X ex",
	},

	suffix: "EX",
	illustrator: "takuyoa",
	rarity: "None",
	category: "Pokemon",
	hp: 360,
	types: ["Fire"],
	stage: "Stage2",
	dexId: [10087],

	attacks: [
	{
		cost: ["Fire", "Fire"],

		name: {
			en: "Inferno X",
			fr: "Inferno X",
			de: "Inferno X",
			it: "Inferno X",
			es: "Infierno X",
			pt: "Inferno X",
			'es-mx': "Inferno X",
		},

		damage: "90×",

		effect: {
			en: "Discard any amount of {R} Energy from among your Pokémon, and this attack does 90 damage for each card you discarded in this way.",
			fr: "Défaussez autant d'Énergies {R} que vous le voulez parmi vos Pokémon. Cette attaque inflige 90 dégâts pour chaque carte défaussée de cette façon.",
			de: "Lege beliebig viele {R}-Energien von deinen Pokémon auf deinen Ablagestapel, und diese Attacke fügt für jede Karte, die du auf diese Weise auf den Ablagestapel gelegt hast, 90 Schadenspunkte zu.",
			it: "Scarta un numero qualsiasi di Energie {R} dai tuoi Pokémon e questo attacco infligge 90 danni per ogni carta che hai scartato in questo modo.",
			es: "Descarta cualquier cantidad de Energías {R} de tus Pokémon, y este ataque hace 90 puntos de daño por cada carta que hayas descartado de esta manera.",
			pt: "Descarte qualquer quantidade de Energia {R} dentre seus Pokémon, e este ataque causa 90 pontos de dano para cada carta descartada desta forma.",
			'es-mx': "Discard any amount of {R} Energy from among your Pokémon, and this attack does 90 damage for each card you discarded in this way.",
		},
	},
	],

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		de: "Glutexo",
		it: "Charmeleon",
		es: "Charmeleon",
		pt: "Charmeleon"
	},

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 680639,
	},

	variants: [
	{
		type: "holo",
		stamp: ["set-logo"]
	},
	{
		type: "holo",
		stamp: ["set-logo","staff"]
	},
	]
}

export default card