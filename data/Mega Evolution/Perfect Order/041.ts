import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Landorus",
		fr: "Démétéros",
		de: "Demeteros",
		it: "Landorus",
		es: "Landorus",
		pt: "Landorus",
		'es-mx': "Landorus",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [645],

	attacks: [
	{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Rock Tumble",
			fr: "Roule-Pierre",
			de: "Rollende Felsen",
			it: "Tiramassi",
			es: "Avalancha de Rocas",
			pt: "Desabamento de Pedras",
			'es-mx': "Avalancha de Rocas",
		},

		damage: 50,

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia.",
		},
	},
	{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Screw Knuckle",
			fr: "Poing Vis",
			de: "Windende Faust",
			it: "Avvitapugno",
			es: "Nudillo Tornillo",
			pt: "Punho Parafuso",
			'es-mx': "Nudillo Tornillo",
		},

		damage: 120,

		effect: {
			en: "Put an Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			de: "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand.",
			it: "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
			es: "Pon 1 Energía unida a este Pokémon en tu mano.",
			pt: "Coloque uma Energia ligada a este Pokémon na sua mão.",
			'es-mx': "Pon 1 Energía unida a este Pokémon en tu mano.",
		},
	},
	],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684427,
	},
}

export default card