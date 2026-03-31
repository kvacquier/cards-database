import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Aegislash",
		fr: "Exagide",
		de: "Durengard",
		it: "Aegislash",
		es: "Aegislash",
		pt: "Aegislash",
		'es-mx': "Aegislash",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
		de: "Duokles",
		it: "Doublade",
		es: "Doublade",
		pt: "Doublade",
		'es-mx': "Doublade",
	},
	stage: "Stage2",
	dexId: [681],

	attacks: [
	{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			de: "Schlitzer",
			it: "Lacerazione",
			es: "Cuchillada",
			pt: "Talho",
			'es-mx': "Cuchillada",
		},

		damage: 80,
	},
	{
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Metal Slash",
			fr: "Tranche Métallique",
			de: "Metallschlitzer",
			it: "Lacerametallo",
			es: "Tajo Metálico",
			pt: "Talho de Metal",
			'es-mx': "Tajo Metálico",
		},

		damage: 230,

		effect: {
			en: "During your next turn, this Pokémon can't use attacks.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			de: "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			es: "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
		},
	},
	],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684381,
	},
}

export default card