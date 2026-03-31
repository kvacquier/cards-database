import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Probopass",
		fr: "Tarinorme",
		de: "Voluminas",
		it: "Probopass",
		es: "Probopass",
		pt: "Probopass",
		'es-mx': "Probopass",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Nosepass",
		fr: "Tarinor",
		de: "Nasgnet",
		it: "Nosepass",
		es: "Nosepass",
		pt: "Nosepass",
		'es-mx': "Nosepass",
	},
	stage: "Stage1",
	dexId: [476],

	attacks: [
	{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Rolling Rocks",
			fr: "Rochers Roulants",
			de: "Rollende Steine",
			it: "Massi Rotolanti",
			es: "Rocas Rodantes",
			pt: "Pedras Rolantes",
			'es-mx': "Rocas Rodantes",
		},

		damage: 60,
	},
	{
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			en: "Obliterating Nose",
			fr: "Nez Destructeur",
			de: "Niederstreckende Nase",
			it: "Naso Devastante",
			es: "Nariz Destructora",
			pt: "Obliteração Nasal",
			'es-mx': "Nariz Destructora",
		},

		damage: 260,

		effect: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
			de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tre Energie da questo Pokémon.",
			es: "Descarta 3 Energías de este Pokémon.",
			pt: "Descarte 3 Energias deste Pokémon.",
			'es-mx': "Descarta 3 Energías de este Pokémon.",
		},
	},
	],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684423,
	},
}

export default card