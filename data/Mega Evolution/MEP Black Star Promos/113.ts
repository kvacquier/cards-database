import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Enamorus",
		fr: "Amovénus",
		es: "Enamorus",
	},

	illustrator: "CHORISO",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [905],

	abilities: [{
		type: "Ability",

		name: {
			en: "Incarnate Solidarity",
			fr: "Solidarité d'Avatar",
			es: "Avatar Solidario",
		},

		effect: {
			en: "If you have Tornadus, Thundurus, Landorus, and Enamorus in play, ignore all Colorless Energy in the costs of attacks used by this Pokémon.",
			fr: "Si vous avez Boréas, Fulguris, Démétéros et Amovénus en jeu, ignorez toutes les Énergies Colorless dans le coût des attaques utilisées par ce Pokémon.",
			es: "Si tienes a Tornadus, Thundurus, Landorus y Enamorus en juego, ignora todas las Energías Colorless en los costes de los ataques usados por este Pokémon.",
		}
	}],

	attacks: [{
		name: {
			en: "Rising Heart",
			fr: "Cœur Ascendant",
			es: "Corazón Ascendente",
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon <em>ex</em>, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-<em>ex</em>, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon <em>ex</em>, este ataque hace 100 puntos de daño más.",
		},

		damage: "100+",
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "x2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			stamp: ["set-logo","pokemon-center"]
		},
		{
			type: "holo",
			stamp: ["set-logo","staff"]
		}
	],
}

export default card
