import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Luxray",
		fr: "Luxray",
		de: "Luxtra",
		it: "Luxray",
		es: "Luxray",
		pt: "Luxray",
		'es-mx': "Luxray",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		en: "Luxio",
		fr: "Luxio",
		de: "Luxio",
		it: "Luxio",
		es: "Luxio",
		pt: "Luxio",
		'es-mx': "Luxio",
	},
	stage: "Stage2",
	dexId: [405],

	attacks: [
	{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Incessant Onslaught",
			fr: "Assauts Continuels",
			de: "Unablässiger Ansturm",
			it: "Offensiva Continua",
			es: "Embestida Incesante",
			pt: "Sova Sem Fim",
			'es-mx': "Embestida Incesante",
		},

		damage: "70×",

		effect: {
			en: "This attack does 70 damage for each Prize card you have taken.",
			fr: "Cette attaque inflige 70 dégâts pour chaque carte Récompense que vous avez récupérée.",
			de: "Diese Attacke fügt für jede von dir genommene Preiskarte 70 Schadenspunkte zu.",
			it: "Questo attacco infligge 70 danni per ogni carta Premio che hai preso.",
			es: "Este ataque hace 70 puntos de daño por cada carta de Premio que hayas cogido.",
			pt: "Este ataque causa 70 pontos de dano para cada carta de Prêmio que você pegou.",
			'es-mx': "Este ataque hace 70 puntos de daño por cada carta de Premio que hayas cogido.",
		},
	},
	{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Strong Volt",
			fr: "Décharge Foudroyante",
			de: "Voltkraft",
			it: "Supervolt",
			es: "Descarga Fulminante",
			pt: "Tensão Intensa",
			'es-mx': "Descarga Fulminante",
		},

		damage: 200,

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta due Energie da questo Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon.",
		},
	},
	],

	retreat: 0,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684411,
	},
}

export default card