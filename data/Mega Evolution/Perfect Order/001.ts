import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Spinarak",
		fr: "Mimigal",
		de: "Webarak",
		it: "Spinarak",
		es: "Spinarak",
		pt: "Spinarak",
		'es-mx': "Spinarak",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	dexId: [167],

	attacks: [
	{
		cost: ["Grass"],

		name: {
			en: "Gooey Thread",
			fr: "Fil Gluant",
			de: "Klebriger Faden",
			it: "Tela Appiccicosa",
			es: "Hilo Pegajoso",
			pt: "Fio Pegajoso",
			'es-mx': "Hilo Pegajoso",
		},

		damage: 10,

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684397,
	},
}

export default card