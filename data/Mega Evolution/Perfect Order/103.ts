import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Clefable ex",
		fr: "Méga-Mélodelfe-ex",
		de: "Mega-Pixi-ex",
		it: "Mega Clefable-ex",
		es: "Mega-Clefable ex",
		pt: "Mega Clefable ex",
		'es-mx': "Mega-Clefable ex",
	},

	suffix: "EX",
	rarity: "None",
	category: "Pokemon",
	hp: 320,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [10202],

	abilities: [{
		type: "Ability",

		name: {
			en: "Luminous Wing",
			fr: "Aile Luminescente",
			de: "Luminöse Flügel",
			it: "Ala Luminosa",
			es: "Ala Luminosa",
			pt: "Asa Luminosa",
			'es-mx': "Ala Luminosa",
		},

		effect: {
			en: "Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.",
			fr: "Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon.",
			de: "Verhindere alle Effekte von Fähigkeiten der Pokémon deines Gegners, die diesem Pokémon zugefügt werden.",
			it: "Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			es: "Se evitan todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
			pt: "Previna todos os efeitos das Habilidades dos Pokémon do seu oponente causados a este Pokémon.",
			'es-mx': "Se evitan todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
		},
	}],

	attacks: [
	{
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Shooting Moons",
			fr: "Tirs de Lunes",
			de: "Mondschnuppen",
			it: "Lune Cadenti",
			es: "Disparo Lunar",
			pt: "Luas Cadentes",
			'es-mx': "Disparo Lunar",
		},

		damage: "120+",

		effect: {
			en: "You may discard up to 4 Energy cards from your hand, and this attack does 40 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser jusqu'à 4 cartes Énergie de votre main. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			de: "Du kannst bis zu 4 Energiekarten aus deiner Hand auf deinen Ablagestapel legen, und diese Attacke fügt für jede auf diese Weise abgelegte Karte 40 Schadenspunkte mehr zu.",
			it: "Puoi scartare fino a quattro carte Energia dalla tua mano e questo attacco infligge 40 danni in più per ogni carta che hai scartato in questo modo.",
			es: "Puedes descartar hasta 4 cartas de Energía de tu mano, y este ataque hace 40 puntos de daño más por cada carta que hayas descartado de esta manera.",
			pt: "Você pode descartar até 4 cartas de Energia da sua mão, e este ataque causa 40 pontos de dano a mais para cada carta descartada desta forma.",
			'es-mx': "Puedes descartar hasta 4 cartas de Energía de tu mano, y este ataque hace 40 puntos de daño más por cada carta que hayas descartado de esta manera.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684384,
	},
}

export default card