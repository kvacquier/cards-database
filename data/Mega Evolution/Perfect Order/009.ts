import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Vivillon",
		fr: "Prismillon",
		de: "Vivillon",
		it: "Vivillon",
		es: "Vivillon",
		pt: "Vivillon",
		'es-mx': "Vivillon",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Spewpa",
		fr: "Pérégrain",
		de: "Puponcho",
		it: "Spewpa",
		es: "Spewpa",
		pt: "Spewpa",
		'es-mx': "Spewpa",
	},
	stage: "Stage2",
	dexId: [666],

	abilities: [{
		type: "Ability",

		name: {
			en: "Grand Wing",
			fr: "Aile Grandiose",
			de: "Gewaltige Flügel",
			it: "Ala Imponente",
			es: "Ala Colosal",
			pt: "Asa Grandiosa",
			'es-mx': "Ala Colosal",
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Your opponent shuffles their hand and puts it on the bottom of their deck. If they put any cards on the bottom of their deck in this way, they draw 4 cards.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Votre adversaire mélange sa main, puis la place en dessous de son deck. Si au moins une carte est placée en dessous de son deck de cette façon, votre adversaire pioche 4 cartes.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Dein Gegner mischt seine Handkarten und legt sie unter sein Deck. Wenn er auf diese Weise mindestens 1 Karte unter sein Deck gelegt hat, zieht er 4 Karten.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Il tuo avversario rimischia le carte che ha in mano e le mette in fondo al proprio mazzo. Se mette delle carte in fondo al proprio mazzo in questo modo, il tuo avversario pesca quattro carte.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Tu rival baraja las cartas de su mano y las pone en la parte inferior de su baraja. Si pone alguna carta en la parte inferior de su baraja de esta manera, tu rival roba 4 cartas.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Seu oponente embaralha a mão dele e a coloca como as cartas de baixo do baralho dele. Se o seu oponente colocar quaisquer cartas como as cartas de baixo do baralho dele desta forma, ele comprará 4 cartas.",
			'es-mx': "Una vez durante tu turno, puedes usar esta habilidad. Tu rival baraja las cartas de su mano y las pone en la parte inferior de su baraja. Si pone alguna carta en la parte inferior de su baraja de esta manera, tu rival roba 4 cartas.",
		},
	}],

	attacks: [
	{
		cost: ["Grass"],

		name: {
			en: "Blow Through",
			fr: "Grosse Bourrasque",
			de: "Durchdringender Strahl",
			it: "Colposecco",
			es: "Gran Torbellino",
			pt: "Sopro Intenso",
			'es-mx': "Gran Torbellino",
		},

		damage: "60+",

		effect: {
			en: "If a Stadium is in play, this attack does 60 more damage.",
			fr: "Si un Stade est en jeu, cette attaque inflige 60 dégâts supplémentaires.",
			de: "Wenn ein Stadion im Spiel ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			it: "Se c'è una carta Stadio in gioco, questo attacco infligge 60 danni in più.",
			es: "Si hay un Estadio en juego, este ataque hace 60 puntos de daño más.",
			pt: "Se um Estádio estiver em jogo, este ataque causará 60 pontos de dano a mais.",
			'es-mx': "Si hay un Estadio en juego, este ataque hace 60 puntos de daño más.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684366,
	},
}

export default card