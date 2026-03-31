import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Drapion",
		fr: "Drascore",
		de: "Piondragi",
		it: "Drapion",
		es: "Drapion",
		pt: "Drapion",
		'es-mx': "Drapion",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [452],

	attacks: [
	{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Wrack Down",
			fr: "Réduire en Poussière",
			de: "Niederschleudern",
			it: "Abbattere",
			es: "Desmoronar",
			pt: "Desmoronar",
			'es-mx': "Desmoronar",
		},

		damage: 60,
	},
	{
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Hazardous Tail",
			fr: "Queue Nocive",
			de: "Bedrohlicher Schweif",
			it: "Coda Insidiosa",
			es: "Cola Nociva",
			pt: "Cauda Periculosa",
			'es-mx': "Cola Nociva",
		},

		damage: 100,

		effect: {
			en: "This Pokémon also does 70 damage to itself. Your opponent's Active Pokémon is now Paralyzed and Poisoned.",
			fr: "Ce Pokémon s'inflige aussi 70 dégâts. Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
			de: "Dieses Pokémon fügt auch sich selbst 70 Schadenspunkte zu. Das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet.",
			it: "Questo Pokémon infligge anche 70 danni a se stesso. Il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
			es: "Este Pokémon también se hace 70 puntos de daño a sí mismo. El Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
			pt: "Este Pokémon também causa 70 pontos de dano a si mesmo. O Pokémon Ativo do seu oponente agora está Envenenado e Paralisado.",
			'es-mx': "Este Pokémon también se hace 70 puntos de daño a sí mismo. El Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
		},
	},
	],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684433,
	},
}

export default card