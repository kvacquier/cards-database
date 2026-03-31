import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Raticate",
		fr: "Rattatac",
		de: "Rattikarl",
		it: "Raticate",
		es: "Raticate",
		pt: "Raticate",
		'es-mx': "Raticate",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
		de: "Rattfratz",
		it: "Rattata",
		es: "Rattata",
		pt: "Rattata",
		'es-mx': "Rattata",
	},
	stage: "Stage1",
	dexId: [20],

	attacks: [
	{
		cost: ["Colorless"],

		name: {
			en: "Scrape Off",
			fr: "Racler",
			de: "Wegkratzen",
			it: "Raschiare",
			es: "Raspadura",
			pt: "Raspar o Tacho",
			'es-mx': "Raspadura",
		},

		damage: 20,

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			'es-mx': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
		},
	},
	{
		cost: ["Colorless"],

		name: {
			en: "Retaliatory Incisors",
			fr: "Incisives Vengeance",
			de: "Vergeltender Nager",
			it: "Incisivi Ritorsivi",
			es: "Incisivos Vengativos",
			pt: "Incisivos Retaliatórios",
			'es-mx': "Incisivos Vengativos",
		},

		damage: "40×",

		effect: {
			en: "This attack does 40 damage for each damage counter on all of your Benched Rattata.",
			fr: "Cette attaque inflige 40 dégâts pour chaque marqueur de dégâts sur vos Rattata de Banc.",
			de: "Diese Attacke fügt für jede Schadensmarke auf allen Rattfratz auf deiner Bank 40 Schadenspunkte zu.",
			it: "Questo attacco infligge 40 danni per ogni segnalino danno presente sui Rattata nella tua panchina.",
			es: "Este ataque hace 40 puntos de daño por cada contador de daño en cada uno de tus Rattata en Banca.",
			pt: "Este ataque causa 40 pontos de dano para cada contador de dano em todos os seus Rattata no Banco.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada contador de daño en cada uno de tus Rattata en Banca.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684438,
	},
}

export default card