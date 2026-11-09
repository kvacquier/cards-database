import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Masquerain",
		fr: "Maskadra",
		es: "Masquerain",
	},

	illustrator: "Anderson",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Stage1",
	dexId: [284],

	attacks: [{
		name: {
			en: "Frightening Pattern",
			fr: "Motif Effrayant",
			es: "Dibujos Aterradores",
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't use attacks.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas utiliser d'attaques.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques.",
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Bug Out",
			fr: "Horde d'Insectes",
			es: "Bichos al Acecho",
		},

		effect: {
			en: "Reveal the bottom 7 cards of your deck, and this attack does 50 damage for each Pokémon you find there that has the Bug Out attack. Then, shuffle any revealed Pokémon back into your deck. Discard the other cards.",
			fr: "Montrez les 7 cartes du dessous de votre deck. Cette attaque inflige 50 dégâts pour chaque Pokémon que vous y trouvez ayant l'attaque Horde d'Insectes. Mélangez ensuite les Pokémon montrés avec votre deck. Défaussez les autres cartes.",
			es: "Enseña las 7 últimas cartas de tu baraja, y este ataque hace 50 puntos de daño por cada Pokémon que encuentres entre ellas que tenga el ataque Bichos al Acecho. Después, pon todos los Pokémon que hayas enseñado de nuevo en tu baraja y baraja todas las cartas. Descarta el resto de las cartas.",
		},

		damage: "50×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
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
