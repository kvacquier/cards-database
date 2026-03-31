import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Lumiose Galette",
		fr: "Galette Illumis",
		de: "Illumina-Galette",
		it: "Pan di Lumi",
		es: "Galette Luminalia",
		pt: "Crepe de Lumiose",
		'es-mx': "Galette Luminalia",
	},

	rarity: "None",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		en: "Heal 20 damage and remove a Special Condition from your Active Pokémon.",
		fr: "Soignez 20 dégâts et retirez un État Spécial de votre Pokémon Actif.",
		de: "Heile 20 Schadenspunkte und entferne 1 Speziellen Zustand von deinem Aktiven Pokémon.",
		it: "Cura il tuo Pokémon attivo da 20 danni e rimuovi una condizione speciale che lo influenza.",
		es: "Cura 20 puntos de daño y elimina una Condición Especial de tu Pokémon Activo.",
		pt: "Cure 20 pontos de dano e remova uma Condição Especial do seu Pokémon Ativo.",
		'es-mx': "Cura 20 puntos de daño y elimina una Condición Especial de tu Pokémon Activo.",
	},

	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684389,
	},
}

export default card