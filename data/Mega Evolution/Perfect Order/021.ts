import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Starmie ex",
		fr: "Méga-Staross-ex",
		de: "Mega-Starmie-ex",
		it: "Mega Starmie-ex",
		es: "Mega-Starmie ex",
		pt: "Mega Starmie ex",
		'es-mx': "Mega-Starmie ex",
	},
	evolveFrom: {
		en: "Staryu",
		de: "Sterndu",
		es: "Staryu",
		fr: "Stari",
		it: "Staryu",
		pt: "Staryu",
	},

	suffix: "EX",
	rarity: "None",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	stage: "Stage1",
	dexId: [10204],

	attacks: [
	{
		cost: ["Water"],

		name: {
			en: "Jetting Blow",
			fr: "Coup Éclaboussant",
			de: "Wasserschwall",
			it: "Colpogetto",
			es: "Golpe Propulsión",
			pt: "Golpe a Jato",
			'es-mx': "Golpe Propulsión",
		},

		damage: 120,

		effect: {
			en: "This attack also does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 50 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			es: "Este ataque también hace 50 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque también hace 50 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
		},
	},
	{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Nebula Beam",
			fr: "Rayon Nébuleux",
			de: "Nebelstrahl",
			it: "Nebularaggio",
			es: "Rayo Nebulosa",
			pt: "Feixe Celestial",
			'es-mx': "Rayo Nebulosa",
		},

		damage: 210,

		effect: {
			en: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			de: "Der Schaden dieser Attacke wird durch Schwäche oder Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia, ni por ningún efecto en el Pokémon Activo de tu rival.",
			pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'es-mx': "El daño de este ataque no se ve afectado por Debilidad o Resistencia, ni por ningún efecto en el Pokémon Activo de tu rival.",
		},
	},
	],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684360,
	},
}

export default card