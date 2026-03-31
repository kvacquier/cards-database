import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Poké Pad",
		fr: "Poké Registre",
		de: "Poképad",
		it: "Poké Pad",
		es: "Pokétableta",
		pt: "Poké Tablet",
		'es-mx': "Pokétableta",
	},

	rarity: "None",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		en: "Search your deck for a Pokémon that doesn't have a Rule Box, reveal it, and put it into your hand. Then, shuffle your deck. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
		fr: "Cherchez dans votre deck un Pokémon n'ayant pas d'encadré Règle, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck. (Les Pokémon-ex, Pokémon-V, etc. ont des encadrés Règle.)",
		de: "Durchsuche dein Deck nach 1 Pokémon, das kein Regelfeld hat, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck. (Pokémon-ex, Pokémon-V usw. haben Regelfelder.)",
		it: "Cerca nel tuo mazzo un Pokémon che non ha una regola speciale, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo. I Pokémon-ex, i Pokémon-V, ecc. hanno regole speciali.",
		es: "Busca en tu baraja 1 Pokémon que no tenga un recuadro de regla, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja. (Los Pokémon ex, Pokémon V, etc., tienen recuadros de regla).",
		pt: "Procure no seu baralho por um Pokémon que não tiver uma Caixa de Regras, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho. (Pokémon ex, Pokémon V, etc. têm Caixas de Regras.)",
		'es-mx': "Busca en tu baraja 1 Pokémon que no tenga un recuadro de regla, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja. (Los Pokémon ex, Pokémon V, etc., tienen recuadros de regla).",
	},

	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684332,
	},
}

export default card