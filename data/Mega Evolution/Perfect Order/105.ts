import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Yveltal ex",
		fr: "Yveltal-ex",
		de: "Yveltal-ex",
		it: "Yveltal-ex",
		es: "Yveltal ex",
		pt: "Yveltal ex",
		'es-mx': "Yveltal ex",
	},

	suffix: "EX",
	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [717],

	attacks: [
	{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Soul Destroyer",
			fr: "Destructeur d'Âmes",
			de: "Seelenvernichter",
			it: "Distruggianima",
			es: "Destructor de Almas",
			pt: "Destruidor de Almas",
			'es-mx': "Destructor de Almas",
		},

		effect: {
			en: "Knock Out each of your opponent's Pokémon that has 50 HP or less remaining.",
			fr: "Mettez K.O. chacun des Pokémon de votre adversaire auxquels il reste 50 PV ou moins.",
			de: "Mache jedes Pokémon deines Gegners, das 50 oder weniger verbleibende KP hat, kampfunfähig.",
			it: "Metti KO ciascuno dei Pokémon del tuo avversario che ha 50 PS o meno rimanenti.",
			es: "Deja Fuera de Combate a cada uno de los Pokémon de tu rival a los que les queden 50 PS o menos.",
			pt: "Nocauteie cada um dos Pokémon do seu oponente que tiver PS restante de 50 ou menos.",
			'es-mx': "Deja Fuera de Combate a cada uno de los Pokémon de tu rival a los que les queden 50 PS o menos.",
		},
	},
	{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Dark Strike",
			fr: "Frappe Ténébreuse",
			de: "Finsterschlag",
			it: "Colpo Ombra",
			es: "Golpe Siniestro",
			pt: "Golpe de Escuridão",
			'es-mx': "Golpe Siniestro",
		},

		damage: 210,

		effect: {
			en: "During your next turn, this Pokémon can't use Dark Strike.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Frappe Ténébreuse.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Finsterschlag nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo Ombra.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Siniestro.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Golpe de Escuridão.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Golpe Siniestro.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684387,
	},
}

export default card