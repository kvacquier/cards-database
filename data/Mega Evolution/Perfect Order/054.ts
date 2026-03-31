import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Chien-Pao",
		fr: "Baojian",
		de: "Baojian",
		it: "Chien-Pao",
		es: "Chien-Pao",
		pt: "Chien-Pao",
		'es-mx': "Chien-Pao",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [1002],

	attacks: [
	{
		cost: ["Darkness"],

		name: {
			en: "Strafe",
			fr: "Bombarder",
			de: "Beharken",
			it: "Mitragliare",
			es: "Pasada de Ataque",
			pt: "Bombardear",
			'es-mx': "Pasada de Ataque",
		},

		damage: 20,

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			it: "Puoi scambiare questo Pokémon con uno nella tua panchina.",
			es: "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'es-mx': "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
		},
	},
	{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Rising Blade",
			fr: "Lame Ascendante",
			de: "Aufwärtsklinge",
			it: "Lama Ascendente",
			es: "Hoja Creciente",
			pt: "Lâmina Crescente",
			'es-mx': "Hoja Creciente",
		},

		damage: "80+",

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 80 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 80 danni in più.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 80 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 80 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 80 puntos de daño más.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684435,
	},
}

export default card