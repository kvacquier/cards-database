import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Clefairy",
		fr: "Mélofée",
		de: "Piepi",
		it: "Clefairy",
		es: "Clefairy",
		pt: "Clefairy",
		'es-mx': "Clefairy",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [35],

	attacks: [
	{
		cost: ["Psychic"],

		name: {
			en: "Follow Me",
			fr: "Par Ici",
			de: "Spotlight",
			it: "Sonoqui",
			es: "Señuelo",
			pt: "Isca-viva",
			'es-mx': "Señuelo",
		},

		effect: {
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			'es-mx': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
		},
	},
	{
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Flop",
			fr: "Flop",
			de: "Plumps",
			it: "Tonfo",
			es: "Vuelta",
			pt: "Baque",
			'es-mx': "Vuelta",
		},

		damage: 30,
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684415,
	},
}

export default card