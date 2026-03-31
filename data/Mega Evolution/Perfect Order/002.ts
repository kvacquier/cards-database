import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Ariados",
		fr: "Migalos",
		de: "Ariados",
		it: "Ariados",
		es: "Ariados",
		pt: "Ariados",
		'es-mx': "Ariados",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Spinarak",
		fr: "Mimigal",
		de: "Webarak",
		it: "Spinarak",
		es: "Spinarak",
		pt: "Spinarak",
		'es-mx': "Spinarak",
	},
	stage: "Stage1",
	dexId: [168],

	attacks: [
	{
		cost: ["Grass"],

		name: {
			en: "Poison Ring",
			fr: "Anneau de Poison",
			de: "Giftring",
			it: "Velenanello",
			es: "Anillo Venenoso",
			pt: "Anel de Veneno",
			'es-mx': "Anillo Venenoso",
		},

		damage: 50,

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			'es-mx': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684398,
	},
}

export default card