import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Kommo-o",
		fr: "Ékaïser",
		es: "Kommo-o",
	},

	illustrator: "Kazuki Minami",
	rarity: "Promo",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],
	stage: "Stage2",
	dexId: [784],

	abilities: [{
		type: "Ability",

		name: {
			en: "Beat Scales",
			fr: "Écailles Entrechoquées",
			es: "Escamas Resonantes",
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Look at the top 6 cards of your deck and attach any number of Basic Energy cards you find there to your Dragon Pokémon in any way you like. Shuffle the other cards back into your deck.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Regardez les 6 cartes du dessus de votre deck, puis attachez le nombre voulu de cartes Énergie de base que vous y trouvez à vos Pokémon Dragon, comme il vous plaît. Mélangez les autres cartes avec votre deck.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Mira las 6 primeras cartas de tu baraja y une cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a tus Pokémon Dragon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
		}
	}],

	attacks: [{
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
		},

		damage: 170,
		cost: ["Lightning", "Fighting", "Colorless"]
	}],

	retreat: 2,
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
