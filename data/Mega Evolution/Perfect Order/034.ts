import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Meowstic",
		fr: "Mistigrix",
		de: "Psiaugon",
		it: "Meowstic",
		es: "Meowstic",
		pt: "Meowstic",
		'es-mx': "Meowstic",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri",
		de: "Psiau",
		it: "Espurr",
		es: "Espurr",
		pt: "Espurr",
		'es-mx': "Espurr",
	},
	stage: "Stage1",
	dexId: [678],

	attacks: [
	{
		cost: ["Psychic"],

		name: {
			en: "Perplex",
			fr: "Affolement",
			de: "Perplex",
			it: "Sconcerto",
			es: "Desconcierto",
			pt: "Perplexo",
			'es-mx': "Desconcierto",
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival pasa a estar Confundido.",
		},
	},
	{
		cost: ["Psychic"],

		name: {
			en: "Psychic",
			fr: "Psyko",
			de: "Psychokinese",
			it: "Psichico",
			es: "Psíquico",
			pt: "Psíquico",
			'es-mx': "Psíquico",
		},

		damage: "30+",

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684419,
	},
}

export default card