import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
		de: "Resladero",
		it: "Hawlucha",
		es: "Hawlucha",
		pt: "Hawlucha",
		'es-mx': "Hawlucha",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [701],

	attacks: [
	{
		cost: ["Fighting"],

		name: {
			en: "Vengeful Kick",
			fr: "Coup de Pied Vengeur",
			de: "Rachekick",
			it: "Calcio Vendicativo",
			es: "Patada Vengativa",
			pt: "Chute Vingativo",
			'es-mx': "Patada Vengativa",
		},

		damage: "30+",

		effect: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 60 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 60 dégâts supplémentaires.",
			de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			it: "Se i Pokémon nella tua panchina hanno dei segnalini danno, questo attacco infligge 60 danni in più.",
			es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 60 puntos de daño más.",
			pt: "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 60 pontos de dano a mais.",
			'es-mx': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 60 puntos de daño más.",
		},
	},
	],

	retreat: 0,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684428,
	},
}

export default card