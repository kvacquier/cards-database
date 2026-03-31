import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Luxio",
		fr: "Luxio",
		de: "Luxio",
		it: "Luxio",
		es: "Luxio",
		pt: "Luxio",
		'es-mx': "Luxio",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Shinx",
		fr: "Lixy",
		de: "Sheinux",
		it: "Shinx",
		es: "Shinx",
		pt: "Shinx",
		'es-mx': "Shinx",
	},
	stage: "Stage1",
	dexId: [404],

	abilities: [{
		type: "Ability",

		name: {
			en: "Fighting Roar",
			fr: "Rugissement Combatif",
			de: "Kampflustiges Gebrüll",
			it: "Ruggito Combattente",
			es: "Rugido de Lucha",
			pt: "Rugido de Luta",
			'es-mx': "Rugido de Lucha",
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this Pokémon can evolve during your first turn or the turn you play it.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, kann sich dieses Pokémon während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo Pokémon può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este Pokémon poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
		},
	}],

	attacks: [
	{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Static Shock",
			fr: "Choc Statique",
			de: "Statischer Schock",
			it: "Shock Statico",
			es: "Impacto Estático",
			pt: "Choque de Estática",
			'es-mx': "Impacto Estático",
		},

		damage: 40,
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684410,
	},
}

export default card