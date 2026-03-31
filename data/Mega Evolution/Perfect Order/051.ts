import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Skorupi",
		fr: "Rapion",
		de: "Pionskora",
		it: "Skorupi",
		es: "Skorupi",
		pt: "Skorupi",
		'es-mx': "Skorupi",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [451],

	attacks: [
	{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
			de: "Gifthieb",
			it: "Velenpuntura",
			es: "Puya Nociva",
			pt: "Golpe Envenenado",
			'es-mx': "Puya Nociva",
		},

		damage: 20,

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
		},
	},
	],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684432,
	},
}

export default card