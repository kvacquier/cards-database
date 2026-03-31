import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Haunter",
		fr: "Spectrum",
		de: "Alpollo",
		it: "Haunter",
		es: "Haunter",
		pt: "Haunter",
		'es-mx': "Haunter",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
		de: "Nebulak",
		it: "Gastly",
		es: "Gastly",
		pt: "Gastly",
		'es-mx': "Gastly",
	},
	stage: "Stage1",
	dexId: [93],

	attacks: [
	{
		cost: ["Darkness"],

		name: {
			en: "Haunt",
			fr: "Hanter",
			de: "Spuk",
			it: "Infestare",
			es: "Espanto",
			pt: "Assombrar",
			'es-mx': "Espanto",
		},

		effect: {
			en: "Place 3 damage counters on your opponent's Active Pokémon.",
			fr: "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
			de: "Lege 3 Schadensmarken auf das Aktive Pokémon deines Gegners.",
			it: "Metti tre segnalini danno sul Pokémon attivo del tuo avversario.",
			es: "Pon 3 contadores de daño en el Pokémon Activo de tu rival.",
			pt: "Coloque 3 contadores de dano no Pokémon Ativo do seu oponente.",
			'es-mx': "Pon 3 contadores de daño en el Pokémon Activo de tu rival.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684430,
	},
}

export default card