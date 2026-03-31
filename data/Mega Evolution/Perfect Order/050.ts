import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		de: "Gengar",
		it: "Gengar",
		es: "Gengar",
		pt: "Gengar",
		'es-mx': "Gengar",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
		de: "Alpollo",
		it: "Haunter",
		es: "Haunter",
		pt: "Haunter",
		'es-mx': "Haunter",
	},
	stage: "Stage2",
	dexId: [94],

	abilities: [{
		type: "Ability",

		name: {
			en: "Infinite Shadow",
			fr: "Ombre Infinie",
			de: "Ewiger Schatten",
			it: "Ombra Infinita",
			es: "Sombra Infinita",
			pt: "Sombra Infinita",
			'es-mx': "Sombra Infinita",
		},

		effect: {
			en: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, put it into your hand instead of the discard pile. (Discard all attached cards.)",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, ajoutez-le à votre main plutôt que de le placer dans la pile de défausse. (Défaussez toutes les cartes attachées.)",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, nimm es auf deine Hand, anstatt es auf deinen Ablagestapel zu legen. (Lege alle angelegten Karten auf deinen Ablagestapel.)",
			it: "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, aggiungilo alle carte che hai in mano invece di metterlo nella pila degli scarti. Scarta tutte le carte assegnate.",
			es: "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, ponlo en tu mano en vez de en la pila de descartes. (Descarta todas las cartas unidas a él).",
			pt: "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, coloque-o na sua mão em vez da pilha de descarte. (Descarte todas as cartas ligadas a ele.)",
			'es-mx': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, ponlo en tu mano en vez de en la pila de descartes. (Descarta todas las cartas unidas a él).",
		},
	}],

	attacks: [
	{
		cost: ["Darkness"],

		name: {
			en: "Mind Jack",
			fr: "Emprise Mentale",
			de: "Gedankenstoß",
			it: "Sollevamente",
			es: "Levantamente",
			pt: "Tomada Mental",
			'es-mx': "Levantamente",
		},

		damage: "10+",

		effect: {
			en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			es: "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
			'es-mx': "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684431,
	},
}

export default card