import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Tyrantrum",
		fr: "Rexillius",
		de: "Monargoras",
		it: "Tyrantrum",
		es: "Tyrantrum",
		pt: "Tyrantrum",
		'es-mx': "Tyrantrum",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",
	dexId: [697],

	abilities: [{
		type: "Ability",

		name: {
			en: "Tyrannically Gutsy",
			fr: "Tyrannie Musclée",
			de: "Tyrannische Tapferkeit",
			it: "Baldanza Tirannica",
			es: "Coraje Tiránico",
			pt: "Tenacidade Tirânica",
			'es-mx': "Coraje Tiránico",
		},

		effect: {
			en: "If this Pokémon has any Special Energy attached, it gets +150 HP.",
			fr: "Si au moins une Énergie spéciale est attachée à ce Pokémon, il a +150 PV.",
			de: "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, erhält es +150 KP.",
			it: "Se questo Pokémon ha delle Energie speciali assegnate, ha 150 PS in più.",
			es: "Si este Pokémon tiene alguna Energía Especial unida, obtiene 150 PS más.",
			pt: "Se este Pokémon tiver alguma Energia Especial ligada a ele, receberá +150 PS.",
			'es-mx': "Si este Pokémon tiene alguna Energía Especial unida, obtiene 150 PS más.",
		},
	}],

	attacks: [
	{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Wreak Havoc",
			fr: "Ravages",
			de: "Chaos anrichten",
			it: "Scombussolare",
			es: "Sembrar el Caos",
			pt: "Causar Estragos",
			'es-mx': "Sembrar el Caos",
		},

		damage: 160,

		effect: {
			en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Lege pro Kopf die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta la prima carta del mazzo del tuo avversario.",
			es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta de la baraja de tu rival.",
			pt: "Jogue uma moeda até sair coroa. Para cada cara, descarte a carta de cima do baralho do seu oponente.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta de la baraja de tu rival.",
		},
	},
	],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684359,
	},
}

export default card