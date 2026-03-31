import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Talonflame",
		fr: "Flambusard",
		de: "Fiaro",
		it: "Talonflame",
		es: "Talonflame",
		pt: "Talonflame",
		'es-mx': "Talonflame",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
		de: "Dartignis",
		it: "Fletchinder",
		es: "Fletchinder",
		pt: "Fletchinder",
		'es-mx': "Fletchinder",
	},
	stage: "Stage2",
	dexId: [663],

	abilities: [{
		type: "Ability",

		name: {
			en: "Sky Hunt",
			fr: "Chasse Céleste",
			de: "Jäger der Lüfte",
			it: "Caccia Aerea",
			es: "Cacería Aérea",
			pt: "Rapina Aérea",
			'es-mx': "Cacería Aérea",
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Flip a coin. If heads, discard a random card from your opponent's hand.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Wirf 1 Münze. Lege bei Kopf 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Lancia una moneta. Se esce testa, scarta una carta a caso dalla mano del tuo avversario.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Lanza 1 moneda. Si sale cara, descarta 1 carta aleatoria de la mano de tu rival.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Jogue uma moeda. Se sair cara, descarte uma carta aleatória da mão do seu oponente.",
			'es-mx': "Una vez durante tu turno, puedes usar esta habilidad. Lanza 1 moneda. Si sale cara, descarta 1 carta aleatoria de la mano de tu rival.",
		},
	}],

	attacks: [
	{
		cost: ["Fire", "Fire"],

		name: {
			en: "Fire Wing",
			fr: "Aile de Feu",
			de: "Feuerflügel",
			it: "Alafiamma",
			es: "Ala Ígnea",
			pt: "Asa de Fogo",
			'es-mx': "Ala Ígnea",
		},

		damage: 110,
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684405,
	},
}

export default card