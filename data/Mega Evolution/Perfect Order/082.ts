import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Pokémon Catcher",
		fr: "Attrape-Pokémon",
		de: "Pokémon-Fänger",
		it: "Acchiappa-Pokémon",
		es: "Capturapokémon",
		pt: "Pegador de Pokémon",
		'es-mx': "Capturapokémon",
	},

	rarity: "None",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		en: "Switch your opponent's Active Pokémon with 1 of their Benched Pokémon.",
		fr: "Lancez une pièce. Si c'est face, envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
		de: "Wirf 1 Münze. Wechsle bei Kopf 1 Pokémon von der Bank deines Gegners in die Aktive Position ein.",
		it: "Lancia una moneta. Se esce testa, sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
		es: "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
		pt: "Jogue uma moeda. Se sair cara, mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
		'es-mx': "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
	},

	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684324,
	},
}

export default card