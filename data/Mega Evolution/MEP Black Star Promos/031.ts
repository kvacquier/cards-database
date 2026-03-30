import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "N's Zekrom",
		fr: "Zekrom de N",
		de: "Ns Zekrom",
		it: "Zekrom di N",
		es: "Zekrom de N",
		pt: "Zekrom do N",
		'es-mx': "N's Zekrom",
	},

	illustrator: "Bun Toujo",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",
	dexId: [644],

	attacks: [
	{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Shred",
			fr: "Déchiquetage",
			de: "Zerfetzer",
			it: "Tritatutto",
			es: "Hacer Trizas",
			pt: "Triturar",
			'es-mx': "Shred",
		},

		damage: 70,

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'es-mx': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
		},
	},
	{
		cost: ["Fire", "Lightning", "Lightning", "Colorless"],

		name: {
			en: "Rampaging Thunder",
			fr: "Tonnerre Saccageur",
			de: "Wütender Donner",
			it: "Tuono Impazzito",
			es: "Furia Trueno",
			pt: "Trovão Voraz",
			'es-mx': "Rampaging Thunder",
		},

		damage: 250,

		effect: {
			en: "During your next turn, this Pokémon can't use attacks.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			de: "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			es: "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar ataques.",
			'es-mx': "During your next turn, this Pokémon can't use attacks.",
		},
	},
	],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 680480,
	},

	variants: [
	{
		type: "holo",
	},
	{
		type: "holo",
		stamp: ["pokemon-center"]
	},
	]
}

export default card