import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Hippopotas",
		fr: "Hippopotas",
		de: "Hippopotas",
		it: "Hippopotas",
		es: "Hippopotas",
		pt: "Hippopotas",
		'es-mx': "Hippopotas",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [449],

	attacks: [
	{
		cost: ["Fighting"],

		name: {
			en: "Sand Attack",
			fr: "Jet de Sable",
			de: "Sandwirbel",
			it: "Turbosabbia",
			es: "Ataque Arena",
			pt: "Ataque de Areia",
			'es-mx': "Ataque Arena",
		},

		damage: 10,

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'utiliser une attaque, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			de: "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht, eine Attacke einzusetzen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt.",
			it: "Durante il prossimo turno del tuo avversario, se il Pokémon difensore prova a usare un attacco, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha luogo.",
			es: "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se lleva a cabo.",
			pt: "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar usar um ataque, seu oponente jogará uma moeda. Se sair coroa, aquele ataque não acontecerá.",
			'es-mx': "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se lleva a cabo.",
		},
	},
	{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss",
			it: "Morso",
			es: "Mordisco",
			pt: "Mordida",
			'es-mx': "Mordisco",
		},

		damage: 60,
	},
	],

	retreat: 4,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684425,
	},
}

export default card