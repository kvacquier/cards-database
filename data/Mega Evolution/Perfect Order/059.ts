import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Klefki",
		fr: "Trousselin",
		de: "Clavion",
		it: "Klefki",
		es: "Klefki",
		pt: "Klefki",
		'es-mx': "Klefki",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",
	dexId: [707],

	attacks: [
	{
		cost: ["Metal"],

		name: {
			en: "Memory Lock",
			fr: "Verrou Mémoire",
			de: "Gedächtnisschloss",
			it: "Lucchetto Mnemonico",
			es: "Bloqueo de Memoria",
			pt: "Fechadura da Memória",
			'es-mx': "Bloqueo de Memoria",
		},

		damage: 30,

		effect: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks. During your opponent's next turn, that Pokémon can't use that attack.",
			fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas utiliser cette attaque.",
			de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Während des nächsten Zuges deines Gegners kann jenes Pokémon jene Attacke nicht einsetzen.",
			it: "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
			es: "Elige uno de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque.",
			pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Durante o próximo turno do seu oponente, aquele Pokémon não poderá usar aquele ataque.",
			'es-mx': "Elige uno de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684436,
	},
}

export default card