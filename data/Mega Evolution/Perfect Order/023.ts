import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Amaura",
		fr: "Amagara",
		de: "Amarino",
		it: "Amaura",
		es: "Amaura",
		pt: "Amaura",
		'es-mx': "Amaura",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",
	dexId: [698],

	attacks: [
	{
		cost: ["Water", "Colorless"],

		name: {
			en: "Icy Wind",
			fr: "Vent Glace",
			de: "Eissturm",
			it: "Ventogelato",
			es: "Viento Hielo",
			pt: "Vento Congelante",
			'es-mx': "Viento Hielo",
		},

		damage: 50,

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'es-mx': "El Pokémon Activo de tu rival pasa a estar Dormido.",
		},
	},
	],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684355,
	},
}

export default card