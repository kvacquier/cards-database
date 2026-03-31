import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Dewgong",
		fr: "Lamantine",
		de: "Jugong",
		it: "Dewgong",
		es: "Dewgong",
		pt: "Dewgong",
		'es-mx': "Dewgong",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Seel",
		fr: "Otaria",
		de: "Jurob",
		it: "Seel",
		es: "Seel",
		pt: "Seel",
		'es-mx': "Seel",
	},
	stage: "Stage1",
	dexId: [87],

	abilities: [{
		type: "Ability",

		name: {
			en: "Wash Out",
			fr: "Surlavage",
			de: "Wegspülen",
			it: "Sciacquare",
			es: "Hacer Limpieza",
			pt: "Lavagem",
			'es-mx': "Hacer Limpieza",
		},

		effect: {
			en: "As often as you like during your turn, you may use this Ability. Move a {W} Energy from 1 of your Benched Pokémon to your Active Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez utiliser ce talent. Déplacez une Énergie {W} de l'un de vos Pokémon de Banc vers votre Pokémon Actif.",
			de: "Beliebig oft während deines Zuges kannst du diese Fähigkeit einsetzen. Verschiebe 1 {W}-Energie von 1 Pokémon auf deiner Bank auf dein Aktives Pokémon.",
			it: "Durante il tuo turno, puoi usare questa abilità tutte le volte che vuoi. Sposta un'Energia {W} da uno dei Pokémon nella tua panchina al tuo Pokémon attivo.",
			es: "Todas las veces que quieras durante tu turno, puedes usar esta habilidad. Mueve 1 Energía {W} de uno de tus Pokémon en Banca a tu Pokémon Activo.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá usar esta Habilidade. Mova uma Energia {W} de 1 dos seus Pokémon no Banco para o seu Pokémon Ativo.",
			'es-mx': "Todas las veces que quieras durante tu turno, puedes usar esta habilidad. Mueve 1 Energía {W} de uno de tus Pokémon en Banca a tu Pokémon Activo.",
		},
	}],

	attacks: [
	{
		cost: ["Water", "Water"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			de: "Wellenplatscher",
			it: "Schizzi d'Onda",
			es: "Chapoteo Ondulante",
			pt: "Onda Borrifante",
			'es-mx': "Chapoteo Ondulante",
		},

		damage: 60,
	},
	],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684373,
	},
}

export default card