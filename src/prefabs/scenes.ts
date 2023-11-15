import { SceneType } from '../types/types'
import { getRandomEnemyId } from './enimes'
import { getRandomItemId } from './items'

const newScenes: Array<SceneType> = [
	{
		id: 0,
		text: 'Рады приветсвовать вас на нашей арене!',
		type: 'scene',
		options: [
			{ choice: 'Вступить в первый бой', nextScene: { id: 1, type: 'battle' } },
			{ choice: 'Я НЕ ХОЧУ!!!', nextScene: { id: -1, type: 'scene' } },
		],
	},
	{
		id: -1,
		text: 'Тебя не спрашивают...',
		type: 'scene',
		options: [
			{ choice: 'Вступить в первый бой', nextScene: { id: 1, type: 'battle' } },
			{ choice: 'НЕЕТ!!!', nextScene: { id: -1, type: 'scene' } },
		],
	},
	{
		id: 1,
		text: '1-й раунд на нашей арене',
		type: 'battle',
		options: [
			{ choice: 'Ударить', type: 'attack' },
			{ choice: 'Похилиться', type: 'healing' },
		],
		battle: {
			enemiesId: [1, 1],
		},
		nextScene: 2,
	},
	{
		id: 2,
		text: '2-й раунд на нашей арене',
		type: 'battle',
		options: [
			{ choice: 'Ударить', type: 'attack' },
			{ choice: 'Похилиться', type: 'healing' },
		],
		battle: {
			enemiesId: [1, 2, 1],
		},
		nextScene: 3,
	},
	{
		id: 3,
		text: '3-й раунд на нашей арене',
		type: 'battle',
		options: [
			{ choice: 'Ударить', type: 'attack' },
			{ choice: 'Похилиться', type: 'healing' },
		],
		battle: {
			enemiesId: [2, 2, 4],
		},
		nextScene: 4,
	},
	{
		id: 4,
		text: '4-й раунд на нашей арене',
		type: 'battle',
		options: [
			{ choice: 'Ударить', type: 'attack' },
			{ choice: 'Похилиться', type: 'healing' },
		],
		battle: {
			enemiesId: [7, 3],
		},
		nextScene: 5,
	},
	{
		id: 5,
		text: '5-й раунд на нашей арене',
		type: 'battle',
		options: [
			{ choice: 'Ударить', type: 'attack' },
			{ choice: 'Похилиться', type: 'healing' },
		],
		battle: {
			enemiesId: [6],
		},
		nextScene: 6,
	},
	{
		id: 6,
		text: '6-й раунд на нашей арене',
		type: 'battle',
		options: [
			{ choice: 'Ударить', type: 'attack' },
			{ choice: 'Похилиться', type: 'healing' },
		],
		battle: {
			enemiesId: [15, 15, 15],
		},
		nextScene: 7,
	},
	{
		id: 7,
		text: '7-й раунд на нашей арене',
		type: 'battle',
		options: [
			{ choice: 'Ударить', type: 'attack' },
			{ choice: 'Похилиться', type: 'healing' },
		],
		battle: {
			enemiesId: [23, 22],
		},
		nextScene: 8,
	},
	{
		id: 8,
		text: '8-й раунд на нашей арене',
		type: 'battle',
		options: [
			{ choice: 'Ударить', type: 'attack' },
			{ choice: 'Похилиться', type: 'healing' },
		],
		battle: {
			enemiesId: [26, 26],
		},
		nextScene: 9,
	},
	{
		id: 9,
		text: 'Финальный раунд на нашей арене!',
		type: 'battle',
		options: [
			{ choice: 'Ударить', type: 'attack' },
			{ choice: 'Похилиться', type: 'healing' },
		],
		battle: {
			enemiesId: [20, 31],
		},
		nextScene: 1,
	},
]

const testScenes: SceneType[] = [
	{
		id: 0,
		text: 'Добро пожаловать в мир магии! Вы - молодой маг, обладающий уникальными способностями. Ваше приключение начинается в таинственном лесу.',
		type: 'scene',
		options: [
			{ choice: 'Исследовать лес', nextScene: { id: 1, type: 'battle' } },
		],
	},
	{
		id: 1,
		text: 'БОЙ.',
		type: 'battle',
		battle: {
			enemiesId: [getRandomEnemyId(), getRandomEnemyId(), getRandomEnemyId()],
		},
		options: [{ choice: 'Ударить', type: 'attack' }],
		nextScene: 2,
	},
]

const newTestScene: SceneType[] = [
	{
		id: 0,
		text: 'Вы стоите перед тремя сундуками, какой выберете?',
		type: 'scene',
		options: [
			{choice: 'левый', action: {type: 'damage',message: 'Открыв левую дверь вы замечаете что вы наступили в мешок гвоздей и поранились', get: {damage: 5}}},
			{choice: 'средний', action: {type: 'heal',message: 'Открыв среднюю дверь вы увидели тотем неизвестного божества и решили помолиться', get: {healing: 5}}},
			{choice: 'Взять обычный предмет', action: {type: 'treasure', message: 'Вы взяли обычный предмет', get: {treasure: [getRandomItemId('basic')]}}},
			{choice: 'Взять редкий предмет', action: {type: 'treasure', message: 'Вы взяли редкий предмет', get: {treasure: [getRandomItemId('rare')]}}},
			{choice: 'Взять эпический предмет', action: {type: 'treasure', message: 'Вы взяли эпический предмет', get: {treasure: [getRandomItemId('epic')]}}},
			{choice: 'Взять легендарный предмет', action: {type: 'treasure', message: 'Вы взяли легендарный предмет', get: {treasure: [getRandomItemId('legendary')]}}},
			{choice: 'Пройти мимо', nextScene: {id: 1, type: 'scene'}}
		]
	}
]

const scenes: Array<SceneType> = [
	{
		id: 0,
		text: 'Добро пожаловать в мир магии! Вы - молодой маг, обладающий уникальными способностями. Ваше приключение начинается в таинственном лесу.',
		type: 'scene',
		options: [
			{ choice: 'Исследовать лес', nextScene: { id: 1, type: 'scene' } },
		],
	},
	{
		id: 1,
		text: 'Вы натыкаетесь на первого врага - Скелета. Он поднимается из могилы, готовясь к атаке!',
		type: 'battle',
		battle: { enemiesId: [1] },
		options: [
			{ choice: 'Использовать магию огня', type: 'attack' },
			{ choice: 'Призвать защитного призрака', type: 'healing' },
		],
		nextScene: 3,
	},
	{
		id: 3,
		text: 'Скелет повержен! После победы, ваши магические силы усиливаются. Путь раздваивается: впереди лес или дорога к горам.',
		type: 'scene',
		options: [
			{ choice: 'Продолжить через лес', nextScene: { id: 4, type: 'scene' } },
			{ choice: 'Подняться в горы', nextScene: { id: 5, type: 'scene' } },
		],
	},
	{
		id: 4,
		text: 'Лес становится гуще, а впереди появляется Зомби, готовый напасть!',
		type: 'battle',
		battle: { enemiesId: [2] },
		options: [
			{ choice: 'Заклинание ледяного ветра', type: 'attack' },
			{ choice: 'Телепортироваться назад', type: 'healing' },
		],
		nextScene: 6,
	},
	{
		id: 5,
		text: 'Вы поднимаетесь в горы, где вас атакует Горный тролль!',
		type: 'battle',
		battle: { enemiesId: [12] },
		options: [
			{ choice: 'Молниеносное заклинание', type: 'attack' },
			{ choice: 'Создать магический щит', type: 'healing' },
		],
		nextScene: 7,
	},
	{
		id: 6,
		text: 'Лес остался позади. Перед вами открывается поляна. Вы замечаете магическую башню в дали.',
		type: 'scene',
		options: [
			{
				choice: 'Идти к магической башне',
				nextScene: { id: 8, type: 'scene' },
			},
			{ choice: 'Осмотреть поляну', nextScene: { id: 9, type: 'scene' } },
		],
	},
	{
		id: 7,
		text: 'Горный тролль был побежден! Вы продолжаете восхождение в горы. По пути вы замечаете вход в древний храм.',
		type: 'scene',
		options: [
			{ choice: 'Исследовать храм', nextScene: { id: 10, type: 'scene' } },
			{
				choice: 'Продолжить восхождение',
				nextScene: { id: 11, type: 'scene' },
			},
		],
	},
	{
		id: 8,
		text: 'Вы приближаетесь к магической башне. Она кажется могущественной, но перед вами встает Летучий химера!',
		type: 'battle',
		battle: { enemiesId: [21] },
		options: [
			{ choice: 'Вызвать огненный шар', type: 'attack' },
			{ choice: 'Освежающее заклинание', type: 'healing' },
		],
		nextScene: 12,
	},
	{
		id: 9,
		text: 'Вы решаете осмотреть поляну и обнаруживаете старый магический артефакт. Подойдя ближе, перед вами возникает Земной голем!',
		type: 'battle',
		battle: { enemiesId: [18] },
		options: [
			{ choice: 'Землетрясение', type: 'attack' },
			{ choice: 'Защитное заклинание', type: 'healing' },
		],
		nextScene: 13,
	},
	{
		id: 10,
		text: 'В храме вы находите загадочный свиток. Вдруг, из тени выходит Энергетический призрак, готовый к атаке!',
		type: 'battle',
		battle: { enemiesId: [14] },
		options: [
			{ choice: 'Магия разрядов', type: 'attack' },
			{ choice: 'Восстановление энергии', type: 'healing' },
		],
		nextScene: 14,
	},
	{
		id: 11,
		text: 'Продолжая восхождение в горы, вы сталкиваетесь с Ледяным великаном, стоящим у входа в ледяной пик.',
		type: 'battle',
		battle: { enemiesId: [8] },
		options: [
			{ choice: 'Ледяной ветер', type: 'attack' },
			{ choice: 'Магическая барьер', type: 'healing' },
		],
		nextScene: 15,
	},
	{
		id: 12,
		text: 'Летучий химера была побеждена! Перед вами открывается вход в магическую башню. Внутри башни ждут новые тайны и испытания.',
		type: 'scene',
		options: [
			{
				choice: 'Войти в магическую башню',
				nextScene: { id: 16, type: 'scene' },
			},
			{
				choice: 'Исследовать окрестности',
				nextScene: { id: 17, type: 'scene' },
			},
		],
	},
	{
		id: 13,
		text: 'Земной голем повержен! На поляне ваши глаза привлекает странный свет. При прикосновении вы телепортируетесь в другое измерение.',
		type: 'scene',
		options: [
			{
				choice: 'Исследовать новое измерение',
				nextScene: { id: 18, type: 'scene' },
			},
			{ choice: 'Попытаться вернуться', nextScene: { id: 19, type: 'scene' } },
		],
	},
	{
		id: 14,
		text: 'Энергетический призрак был разгонен! Вы находите древний артефакт, который, похоже, обладает магической силой.',
		type: 'scene',
		options: [
			{ choice: 'Использовать артефакт', nextScene: { id: 20, type: 'scene' } },
			{ choice: 'Спрятать артефакт', nextScene: { id: 21, type: 'scene' } },
		],
	},
	{
		id: 15,
		text: 'Ледяной великан был побежден! Ваши магические силы продолжают расти. Путь разделяется: далее - ледяной пик или таинственные пещеры.',
		type: 'scene',
		options: [
			{
				choice: 'Восхождение на ледяной пик',
				nextScene: { id: 22, type: 'scene' },
			},
			{
				choice: 'Поехать в таинственные пещеры',
				nextScene: { id: 23, type: 'scene' },
			},
		],
	},
	{
		id: 16,
		text: 'Вы входите в магическую башню, где вас ожидают сложные лабиринты и загадки. Вглубь башни вас нападают Лесной эльфы!',
		type: 'battle',
		battle: { enemiesId: [11, 11] },
		options: [
			{ choice: 'Взрывная магия', type: 'attack' },
			{ choice: 'Призвать ледяных воинов', type: 'healing' },
		],
		nextScene: 24,
	},
	{
		id: 17,
		text: 'Осмотрев окрестности, вы находите старинный амулет. Вдруг, из теней выходит Зверь Апокалипсиса, готовый испытать вас!',
		type: 'battle',
		battle: { enemiesId: [36] },
		options: [
			{ choice: 'Адское пламя', type: 'attack' },
			{ choice: 'Магическое восстановление', type: 'healing' },
		],
		nextScene: 25,
	},
	{
		id: 18,
		text: 'Вы оказываетесь в мистическом измерении, где все вокруг полно энергии. Вас атакует Судья Ада!',
		type: 'battle',
		battle: { enemiesId: [34] },
		options: [
			{ choice: 'Поражение молнии', type: 'attack' },
			{ choice: 'Защита от теневых атак', type: 'healing' },
		],
		nextScene: 26,
	},
	{
		id: 19,
		text: 'Попытка вернуться неудачна, и вы оказываетесь в странном измерении с Левиафаном мрака, готовым атаковать!',
		type: 'battle',
		battle: { enemiesId: [33] },
		options: [
			{ choice: 'Тьма разлетающихся стрел', type: 'attack' },
			{ choice: 'Магическое исцеление', type: 'healing' },
		],
		nextScene: 27,
	},
	{
		id: 20,
		text: 'Используя артефакт, вы ощущаете прилив энергии и новые магические способности. Впереди - таинственный лес.',
		type: 'scene',
		options: [
			{
				choice: 'Исследовать таинственный лес',
				nextScene: { id: 28, type: 'scene' },
			},
			{
				choice: 'Вернуться в магическую башню',
				nextScene: { id: 29, type: 'scene' },
			},
		],
	},
	{
		id: 21,
		text: 'Вы решаете спрятать артефакт для будущих приключений. Вдруг, из тени выходит Король грифонов, готовый атаковать!',
		type: 'battle',
		battle: { enemiesId: [32] },
		options: [
			{ choice: 'Магический удар крыльев', type: 'attack' },
			{ choice: 'Огненная защита', type: 'healing' },
		],
		nextScene: 30,
	},
	{
		id: 22,
		text: 'Восхождение на ледяной пик оказывается крайне опасным. На вершине вас атакует Магия вихря!',
		type: 'battle',
		battle: { enemiesId: [10] },
		options: [
			{ choice: 'Магический вихрь', type: 'attack' },
			{ choice: 'Щит от ветра', type: 'healing' },
		],
		nextScene: 31,
	},
	{
		id: 23,
		text: 'Подойдя к входу в таинственные пещеры, вы сталкиваетесь с Молниеносным элементалем, готовым атаковать!',
		type: 'battle',
		battle: { enemiesId: [24] },
		options: [
			{ choice: 'Цепная молния', type: 'attack' },
			{ choice: 'Магическое исцеление', type: 'healing' },
		],
		nextScene: 32,
	},
	{
		id: 24,
		text: 'Лесной эльф был побежден! Вглубь таинственного леса, вы находите древний храм, в котором магия течет как река.',
		type: 'scene',
		options: [
			{
				choice: 'Исследовать древний храм',
				nextScene: { id: 33, type: 'scene' },
			},
			{ choice: 'Покинуть лес', nextScene: { id: 34, type: 'scene' } },
		],
	},
	{
		id: 25,
		text: 'Зверь Апокалипсиса был побежден! Из таинственных пещер вас выталкивает порыв ветра. Перед вами открывается Летучий химера!',
		type: 'battle',
		battle: { enemiesId: [21] },
		options: [
			{ choice: 'Взрывной удар', type: 'attack' },
			{ choice: 'Магическая защита', type: 'healing' },
		],
		nextScene: 35,
	},
	{
		id: 26,
		text: 'Судья Ада повержен! Но таинственное измерение начинает трескаться, и вы должны быстро покинуть его. Вас атакует Тень Вселенной!',
		type: 'battle',
		battle: { enemiesId: [35] },
		options: [
			{ choice: 'Темное исчезновение', type: 'attack' },
			{ choice: 'Магическая регенерация', type: 'healing' },
		],
		nextScene: 36,
	},
	{
		id: 27,
		text: 'Левиафан мрака был побежден! Вы находите древний свиток в таинственном лесу, который обещает раскрыть новые заклинания.',
		type: 'scene',
		options: [
			{ choice: 'Прочитать свиток', nextScene: { id: 37, type: 'scene' } },
			{ choice: 'Исследовать дальше', nextScene: { id: 38, type: 'scene' } },
		],
	},
	{
		id: 28,
		text: 'Летучий химера была побеждена! Вглубь леса вы обнаруживаете старинный алтарь, окруженный магическим светом.',
		type: 'scene',
		options: [
			{ choice: 'Поклониться алтарю', nextScene: { id: 39, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 40, type: 'scene' } },
		],
	},
	{
		id: 29,
		text: 'Магия вихря была побеждена! Вы возвращаетесь в магическую башню, где вас ожидают новые вызовы.',
		type: 'scene',
		options: [
			{ choice: 'Продолжить в башне', nextScene: { id: 41, type: 'scene' } },
			{
				choice: 'Исследовать окрестности',
				nextScene: { id: 42, type: 'scene' },
			},
		],
	},

	{
		id: 30,
		text: 'Король грифонов был побежден! Возле входа в башню появляется странное портал. Вы слышите шепот теней, приглашая вас пройти.',
		type: 'scene',
		options: [
			{ choice: 'Войти в портал', nextScene: { id: 43, type: 'scene' } },
			{ choice: 'Остаться вне портала', nextScene: { id: 44, type: 'scene' } },
		],
	},
	{
		id: 31,
		text: 'Восхождение на ледяной пик оказалось крайне опасным. На вершине вы встречаете древнего Леденящего вампира, готового к атаке!',
		type: 'battle',
		battle: { enemiesId: [23] },
		options: [
			{ choice: 'Ледяной укус', type: 'attack' },
			{ choice: 'Магическая защита', type: 'healing' },
		],
		nextScene: 45,
	},
	{
		id: 32,
		text: 'Таинственные пещеры оказываются запутанным лабиринтом. Вас атакует Гидра страха, готовая сражаться!',
		type: 'battle',
		battle: { enemiesId: [31] },
		options: [
			{ choice: 'Ядовитый плевок', type: 'attack' },
			{ choice: 'Магическое восстановление', type: 'healing' },
		],
		nextScene: 46,
	},
	{
		id: 33,
		text: 'Древний храм полон тайн. Внутри вас ожидают духи прошлого. Один из духов предлагает вам испытание: сражение с Судьей Ада!',
		type: 'battle',
		battle: { enemiesId: [34] },
		options: [
			{ choice: 'Использовать артефакт', type: 'attack' },
			{ choice: 'Магическое заживление', type: 'healing' },
		],
		nextScene: 47,
	},
	{
		id: 34,
		text: 'Таинственные пещеры оказались местом древнего обряда. Вы находите древний свиток, содержащий заклинание контроля над природой.',
		type: 'scene',
		options: [
			{
				choice: 'Использовать заклинание',
				nextScene: { id: 48, type: 'scene' },
			},
			{ choice: 'Исследовать глубже', nextScene: { id: 49, type: 'scene' } },
		],
	},

	{
		id: 35,
		text: 'Летучий химера была побеждена! Из толпы деревьев выходит Земной голем, готовый испытать ваши магические способности!',
		type: 'battle',
		battle: { enemiesId: [18] },
		options: [
			{ choice: 'Землетрясение', type: 'attack' },
			{ choice: 'Магический барьер', type: 'healing' },
		],
		nextScene: 50,
	},
	{
		id: 36,
		text: 'Тень Вселенной была разгромлена! Но ваши магические силы не успевают отдохнуть, так как перед вами стоит Зверь Апокалипсиса!',
		type: 'battle',
		battle: { enemiesId: [36] },
		options: [
			{ choice: 'Адское пламя', type: 'attack' },
			{ choice: 'Магическое восстановление', type: 'healing' },
		],
		nextScene: 51,
	},
	{
		id: 37,
		text: 'Прочитав свиток, вы обретаете новое понимание магии времени. Перед вами открывается портал в прошлое.',
		type: 'scene',
		options: [
			{ choice: 'Пройти через портал', nextScene: { id: 52, type: 'scene' } },
			{ choice: 'Остаться в настоящем', nextScene: { id: 53, type: 'scene' } },
		],
	},
	{
		id: 38,
		text: 'Исследуя окрестности, вы находите таинственный алтарь, заряженный магической энергией.',
		type: 'scene',
		options: [
			{ choice: 'Поклониться алтарю', nextScene: { id: 54, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 55, type: 'scene' } },
		],
	},
	{
		id: 39,
		text: 'Пройдя через портал, вы оказываетесь в древнем лесу, где вас атакуют Скользкий медуза и Летучий химера!',
		type: 'battle',
		battle: { enemiesId: [20, 21] },
		options: [
			{ choice: 'Магия замедления', type: 'attack' },
			{ choice: 'Восстановление магии', type: 'healing' },
		],
		nextScene: 56,
	},
	{
		id: 40,
		text: 'Пройдя мимо алтаря, вы сталкиваетесь с Каменный гарпией, готовой сражаться в защиту своего священного места.',
		type: 'battle',
		battle: { enemiesId: [22] },
		options: [
			{ choice: 'Каменное оружие', type: 'attack' },
			{ choice: 'Магическая защита', type: 'healing' },
		],
		nextScene: 57,
	},
	{
		id: 41,
		text: 'Вы возвращаетесь в магическую башню, но на этот раз вас встречает ваш старый соперник - Огненный дракон!',
		type: 'battle',
		battle: { enemiesId: [7] },
		options: [
			{ choice: 'Огненное дыхание', type: 'attack' },
			{ choice: 'Магическое исцеление', type: 'healing' },
		],
		nextScene: 58,
	},
	{
		id: 42,
		text: 'Исследуя окрестности башни, вы обнаруживаете старинный магический артефакт. Но рядом поднимается Ледяной великан!',
		type: 'battle',
		battle: { enemiesId: [8] },
		options: [
			{ choice: 'Ледяной удар', type: 'attack' },
			{ choice: 'Магическая защита', type: 'healing' },
		],
		nextScene: 59,
	},
	{
		id: 43,
		text: 'Пройдя через портал, вы оказываетесь в древнем королевстве, где вас вызывает на бой Лич королевства мертвых!',
		type: 'battle',
		battle: { enemiesId: [28] },
		options: [
			{ choice: 'Заклинание смерти', type: 'attack' },
			{ choice: 'Магическое воскрешение', type: 'healing' },
		],
		nextScene: 60,
	},
	{
		id: 44,
		text: 'Остаться вне портала оказывается разумным решением. Возвращаясь к башне, вы замечаете летящий объект, напоминающий корабль. Это огромный Корабль Хаоса!',
		type: 'scene',
		options: [
			{ choice: 'Подойти к кораблю', nextScene: { id: 61, type: 'scene' } },
			{ choice: 'Вернуться в башню', nextScene: { id: 62, type: 'scene' } },
		],
	},
	{
		id: 45,
		text: 'Леденящий вампир был побежден! Поднявшись на ледяной пик, вы обнаруживаете алтарь, излучающий магическую энергию.',
		type: 'scene',
		options: [
			{ choice: 'Пожертвовать магией', nextScene: { id: 63, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 64, type: 'scene' } },
		],
	},
	{
		id: 46,
		text: 'Гидра страха была разгромлена! В глубине таинственных пещер вы находите древний свиток, написанный языком, неизвестным вашему миру.',
		type: 'scene',
		options: [
			{ choice: 'Расшифровать свиток', nextScene: { id: 65, type: 'scene' } },
			{ choice: 'Исследовать дальше', nextScene: { id: 66, type: 'scene' } },
		],
	},
	{
		id: 47,
		text: 'Судья Ада был побежден! На вершине храма вас ожидает древний алтарь, на котором горит вечный огонь.',
		type: 'scene',
		options: [
			{ choice: 'Принести жертву огню', nextScene: { id: 67, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 68, type: 'scene' } },
		],
	},
	{
		id: 48,
		text: 'Используя новое заклинание контроля над природой, вы спасаете местный лес от зловредных созданий.',
		type: 'scene',
		options: [
			{ choice: 'Благословить природу', nextScene: { id: 69, type: 'scene' } },
			{ choice: 'Исследовать дальше', nextScene: { id: 70, type: 'scene' } },
		],
	},
	{
		id: 49,
		text: 'Глубже в пещере вы находите арену, где вы сражались ранее. На ней появляется новый противник - Пылающий дьявол!',
		type: 'battle',
		battle: { enemiesId: [26] },
		options: [
			{ choice: 'Огненная магия', type: 'attack' },
			{ choice: 'Магическая защита', type: 'healing' },
		],
		nextScene: 71,
	},
	{
		id: 50,
		text: 'Земной голем был побежден! Проходя сквозь лес, вы натыкаетесь на древний магический камень, излучающий загадочное свечение.',
		type: 'scene',
		options: [
			{ choice: 'Активировать камень', nextScene: { id: 72, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 73, type: 'scene' } },
		],
	},
	{
		id: 51,
		text: 'Зверь Апокалипсиса был разгромлен! На вершине холма вы видите таинственное сияние, приглашая вас к себе.',
		type: 'scene',
		options: [
			{ choice: 'Подняться на холм', nextScene: { id: 74, type: 'scene' } },
			{ choice: 'Исследовать дальше', nextScene: { id: 75, type: 'scene' } },
		],
	},
	{
		id: 52,
		text: 'Пройдя через портал, вы оказываетесь в древнем городе, где вас вызывает на дуэль Маг огня!',
		type: 'battle',
		battle: { enemiesId: [19] },
		options: [
			{ choice: 'Использовать магию вихря', type: 'attack' },
			{ choice: 'Магическое восстановление', type: 'healing' },
		],
		nextScene: 76,
	},
	{
		id: 53,
		text: 'Остаться в настоящем оказывается разумным решением. Возвращаясь к башне, вы обнаруживаете, что корабль Хаоса приземлился прямо возле нее.',
		type: 'scene',
		options: [
			{ choice: 'Подойти к кораблю', nextScene: { id: 77, type: 'scene' } },
			{ choice: 'Вернуться в башню', nextScene: { id: 78, type: 'scene' } },
		],
	},
	{
		id: 54,
		text: 'Поклонение алтарю приносит вам дары древних богов. Вы чувствуете, как ваши магические способности усиливаются.',
		type: 'scene',
		options: [
			{
				choice: 'Спросить богов о мудрости',
				nextScene: { id: 79, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 80, type: 'scene' } },
		],
	},
	{
		id: 55,
		text: 'Пройдя мимо алтаря, вы попадаете в лагерь группы эльфов, охраняющих лес. Один из эльфов предлагает помощь в сражении с лесными чудовищами.',
		type: 'scene',
		options: [
			{ choice: 'Принять помощь эльфов', nextScene: { id: 81, type: 'scene' } },
			{ choice: 'Отказаться от помощи', nextScene: { id: 82, type: 'scene' } },
		],
	},
	{
		id: 56,
		text: 'Скользкий медуза и Летучий химера были разгромлены! Продвигаясь дальше по лесу, вы натыкаетесь на таинственную дверь, охраняемую Лесным эльфом.',
		type: 'battle',
		battle: { enemiesId: [11] },
		options: [
			{ choice: 'Стрелы из тени', type: 'attack' },
			{ choice: 'Магическое заживление', type: 'healing' },
		],
		nextScene: 83,
	},
	{
		id: 57,
		text: 'Каменный гарпия был разгромлен! Проходя мимо алтаря, вы встречаете странного торговца, предлагающего магические артефакты.',
		type: 'scene',
		options: [
			{ choice: 'Купить артефакт', nextScene: { id: 84, type: 'scene' } },
			{ choice: 'Отказаться от сделки', nextScene: { id: 85, type: 'scene' } },
		],
	},
	{
		id: 58,
		text: 'Огненный дракон был побежден! Из пламени возникает таинственная фигура. Это Ледяной великан, готовый испытать ваши магические силы!',
		type: 'battle',
		battle: { enemiesId: [8] },
		options: [
			{ choice: 'Ледяной кинжал', type: 'attack' },
			{ choice: 'Магическое исцеление', type: 'healing' },
		],
		nextScene: 86,
	},
	{
		id: 59,
		text: 'Лич королевства мертвых был побежден! В его склепе вы обнаруживаете древний артефакт, способный усилить ваши заклинания.',
		type: 'scene',
		options: [
			{ choice: 'Применить артефакт', nextScene: { id: 87, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 88, type: 'scene' } },
		],
	},
	{
		id: 60,
		text: 'Архидемон был разгромлен! В глубинах подземелья вы находите алтарь, окруженный магическими символами.',
		type: 'scene',
		options: [
			{ choice: 'Поклониться алтарю', nextScene: { id: 89, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 90, type: 'scene' } },
		],
	},
	{
		id: 61,
		text: 'Подойдя к кораблю Хаоса, вы встречаете его капитана - Левиафана мрака, готового на дуэль!',
		type: 'battle',
		battle: { enemiesId: [33] },
		options: [
			{ choice: 'Тьма мрака', type: 'attack' },
			{ choice: 'Магическая защита', type: 'healing' },
		],
		nextScene: 91,
	},
	{
		id: 62,
		text: 'Вернувшись в башню, вы обнаруживаете, что корабль Хаоса приземлился прямо возле нее. На борту корабля вас ждет загадочный незнакомец.',
		type: 'scene',
		options: [
			{ choice: 'Подойти к незнакомцу', nextScene: { id: 92, type: 'scene' } },
			{ choice: 'Вернуться в башню', nextScene: { id: 93, type: 'scene' } },
		],
	},
	{
		id: 63,
		text: 'Леденящий вампир был побежден! Алтарь начинает светиться ярким светом, наполняя вас магической энергией.',
		type: 'scene',
		options: [
			{ choice: 'Поглотить энергию', nextScene: { id: 94, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 95, type: 'scene' } },
		],
	},
	{
		id: 64,
		text: 'Пройдя мимо алтаря, вы натыкаетесь на группу странствующих магов, которые предлагают вам участвовать в магическом турнире.',
		type: 'scene',
		options: [
			{
				choice: 'Принять участие в турнире',
				nextScene: { id: 96, type: 'scene' },
			},
			{
				choice: 'Отказаться от предложения',
				nextScene: { id: 97, type: 'scene' },
			},
		],
	},
	{
		id: 65,
		text: 'Расшифровав свиток, вы обнаруживаете древний магический ритуал. После его выполнения вы чувствуете, как ваши магические способности расширяются.',
		type: 'scene',
		options: [
			{
				choice: 'Исследовать новые способности',
				nextScene: { id: 98, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 99, type: 'scene' } },
		],
	},
	{
		id: 66,
		text: 'Продвигаясь глубже, вы натыкаетесь на таинственный портал, ведущий в другое измерение. Ваш выбор - войти или остаться в текущем мире.',
		type: 'scene',
		options: [
			{ choice: 'Войти в портал', nextScene: { id: 100, type: 'scene' } },
			{
				choice: 'Остаться в текущем мире',
				nextScene: { id: 101, type: 'scene' },
			},
		],
	},
	{
		id: 67,
		text: 'Принеся жертву вечному огню, вы получаете благословение огненного духа. Ваши заклинания теперь пронизаны огненной силой.',
		type: 'scene',
		options: [
			{
				choice: 'Полностью поглотить благословение',
				nextScene: { id: 102, type: 'scene' },
			},
			{ choice: 'Остаться равнодушным', nextScene: { id: 103, type: 'scene' } },
		],
	},
	{
		id: 68,
		text: 'Пройдя мимо алтаря, вы видите таинственное отражение своей души. Ваш выбор - вступить в контакт или игнорировать.',
		type: 'scene',
		options: [
			{ choice: 'Вступить в контакт', nextScene: { id: 104, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 105, type: 'scene' } },
		],
	},
	{
		id: 69,
		text: 'Благословив природу, вы становитесь чемпионом лесных сил. Лесные существа теперь с вами на одной волне.',
		type: 'scene',
		options: [
			{
				choice: 'Попросить лесных стражей о помощи',
				nextScene: { id: 106, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 107, type: 'scene' } },
		],
	},
	{
		id: 70,
		text: 'Продвигаясь дальше, вы встречаете старого мага, предлагающего обменяться магическими знаниями.',
		type: 'scene',
		options: [
			{
				choice: 'Принять предложение об обмене',
				nextScene: { id: 108, type: 'scene' },
			},
			{ choice: 'Отказаться', nextScene: { id: 109, type: 'scene' } },
		],
	},
	{
		id: 71,
		text: 'Пылающий дьявол был разгромлен! В его пламени вы обнаруживаете древний артефакт, способный вызывать огненные бури.',
		type: 'scene',
		options: [
			{ choice: 'Испытать артефакт', nextScene: { id: 110, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 111, type: 'scene' } },
		],
	},
	{
		id: 72,
		text: 'Земной голем был разгромлен! В его разрушенных обломках вы находите странный кристалл, излучающий земельную энергию.',
		type: 'scene',
		options: [
			{
				choice: 'Взаимодействовать с кристаллом',
				nextScene: { id: 112, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 113, type: 'scene' } },
		],
	},
	{
		id: 73,
		text: 'Пройдя мимо, вы встречаете странного старца, предлагающего вам загадочный зелье.',
		type: 'scene',
		options: [
			{ choice: 'Выпить зелье', nextScene: { id: 114, type: 'scene' } },
			{ choice: 'Отказаться', nextScene: { id: 115, type: 'scene' } },
		],
	},
	{
		id: 74,
		text: 'Зверь Апокалипсиса был разгромлен! На вершине холма вы обнаруживаете древний алтарь, предназначенный для вызова таинственного существа.',
		type: 'scene',
		options: [
			{ choice: 'Призвать существо', nextScene: { id: 116, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 117, type: 'scene' } },
		],
	},
	{
		id: 75,
		text: 'Победив Тень Вселенной, вы обнаруживаете древний магический артефакт, способный искривлять реальность.',
		type: 'scene',
		options: [
			{
				choice: 'Экспериментировать с артефактом',
				nextScene: { id: 118, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 119, type: 'scene' } },
		],
	},
	{
		id: 76,
		text: 'Дракон Хаоса был разгромлен! Из его логова выходит Черная ведьма, готовая испытать ваши магические силы!',
		type: 'battle',
		battle: { enemiesId: [27] },
		options: [
			{ choice: 'Темная магия', type: 'attack' },
			{ choice: 'Магическое ограждение', type: 'healing' },
		],
		nextScene: 120,
	},
	{
		id: 77,
		text: 'Левиафан мрака был побежден! На его корабле вы обнаруживаете портал, ведущий в таинственный мир теней.',
		type: 'scene',
		options: [
			{ choice: 'Войти в портал', nextScene: { id: 121, type: 'scene' } },
			{ choice: 'Вернуться в башню', nextScene: { id: 122, type: 'scene' } },
		],
	},
	{
		id: 78,
		text: 'Король грифонов был разгромлен! Спасаясь от его атак, вы случайно оказываетесь в магической тайне древней библиотеки.',
		type: 'scene',
		options: [
			{
				choice: 'Изучить древние тексты',
				nextScene: { id: 123, type: 'scene' },
			},
			{ choice: 'Покинуть библиотеку', nextScene: { id: 124, type: 'scene' } },
		],
	},
	{
		id: 79,
		text: 'Судья Ада был побежден! В его логове вы обнаруживаете зеркало, отражающее ваши самые глубокие страхи.',
		type: 'scene',
		options: [
			{ choice: 'Взглянуть в зеркало', nextScene: { id: 125, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 126, type: 'scene' } },
		],
	},
	{
		id: 80,
		text: 'Тень Вселенной была побеждена! В ее логове вы находите древний артефакт, способный контролировать темные силы.',
		type: 'scene',
		options: [
			{
				choice: 'Экспериментировать с артефактом',
				nextScene: { id: 127, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 128, type: 'scene' } },
		],
	},
	{
		id: 81,
		text: 'Гидра страха была разгромлена! На мосту перед вратами замка вас ожидают три раздраженных тролля.',
		type: 'battle',
		battle: { enemiesId: [12, 12, 12] },
		options: [
			{ choice: 'Магическая вихрь', type: 'attack' },
			{ choice: 'Магическое исцеление', type: 'healing' },
		],
		nextScene: 129,
	},
	{
		id: 82,
		text: 'Каменный гарпия был побежден! Вы встречаете таинственного странника, предлагающего помощь в обмен на вашу магическую энергию.',
		type: 'scene',
		options: [
			{
				choice: 'Принять помощь странника',
				nextScene: { id: 130, type: 'scene' },
			},
			{ choice: 'Отказаться', nextScene: { id: 131, type: 'scene' } },
		],
	},
	{
		id: 83,
		text: 'Леденящий вампир был разгромлен! В его логове вы обнаруживаете древний свиток с запрещенными заклинаниями.',
		type: 'scene',
		options: [
			{ choice: 'Изучить свиток', nextScene: { id: 132, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 133, type: 'scene' } },
		],
	},
	{
		id: 84,
		text: 'Молниеносный элементаль был побежден! На его месте возникает магический портал, ведущий в далекие земли.',
		type: 'scene',
		options: [
			{ choice: 'Пройти через портал', nextScene: { id: 134, type: 'scene' } },
			{ choice: 'Остаться здесь', nextScene: { id: 135, type: 'scene' } },
		],
	},
	{
		id: 85,
		text: 'Пройдя мимо, вы обнаруживаете древний алтарь, предназначенный для призыва забытого бога.',
		type: 'scene',
		options: [
			{
				choice: 'Призвать забытого бога',
				nextScene: { id: 136, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 137, type: 'scene' } },
		],
	},
	{
		id: 86,
		text: 'Пылающий дьявол был разгромлен! В его логове вы обнаруживаете старинный артефакт, способный усиливать магические атаки.',
		type: 'scene',
		options: [
			{ choice: 'Испытать артефакт', nextScene: { id: 138, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 139, type: 'scene' } },
		],
	},
	{
		id: 87,
		text: 'Летучий химера был разгромлен! Из ее логова выходит загадочный некромант, готовый вызвать армию мертвецов.',
		type: 'battle',
		battle: { enemiesId: [28, 28, 28, 28] },
		options: [
			{ choice: 'Магия ужаса', type: 'attack' },
			{ choice: 'Магическое исцеление', type: 'healing' },
		],
		nextScene: 140,
	},
	{
		id: 88,
		text: 'Каменный гарпия был побежден! Вы находите древний амулет, который обладает защитной магией.',
		type: 'scene',
		options: [
			{ choice: 'Принять амулет', nextScene: { id: 141, type: 'scene' } },
			{ choice: 'Отказаться', nextScene: { id: 142, type: 'scene' } },
		],
	},
	{
		id: 89,
		text: 'Леденящий вампир был разгромлен! Из его темного артефакта вы чувствуете поток энергии, способной контролировать время.',
		type: 'scene',
		options: [
			{
				choice: 'Экспериментировать с энергией',
				nextScene: { id: 143, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 144, type: 'scene' } },
		],
	},
	{
		id: 90,
		text: 'Молниеносный элементаль был побежден! В его искристых останках вы обнаруживаете магический кристалл, способный усилить вашу магию.',
		type: 'scene',
		options: [
			{ choice: 'Принять кристалл', nextScene: { id: 145, type: 'scene' } },
			{ choice: 'Оставить кристалл', nextScene: { id: 146, type: 'scene' } },
		],
	},
	{
		id: 91,
		text: 'Пройдя мимо, вы видите древнюю статую, скрытую в тени. При прикосновении к статуе, вы чувствуете, как в вас пробуждается древняя магия.',
		type: 'scene',
		options: [
			{
				choice: 'Исследовать древнюю магию',
				nextScene: { id: 147, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 148, type: 'scene' } },
		],
	},
	{
		id: 92,
		text: 'Зверь Апокалипсиса был разгромлен! В центре арены вы обнаруживаете портал, ведущий в измерение магических тайн.',
		type: 'scene',
		options: [
			{ choice: 'Войти в портал', nextScene: { id: 149, type: 'scene' } },
			{ choice: 'Остаться на арене', nextScene: { id: 150, type: 'scene' } },
		],
	},
	{
		id: 93,
		text: 'Пройдя мимо, вы встречаете древнего колдуна, предлагающего обменяться своими магическими знаниями на ваш опыт.',
		type: 'scene',
		options: [
			{
				choice: 'Принять знания колдуна',
				nextScene: { id: 151, type: 'scene' },
			},
			{ choice: 'Отказаться', nextScene: { id: 152, type: 'scene' } },
		],
	},
	{
		id: 94,
		text: 'Судья Ада был побежден! В его логове вы обнаруживаете древний свиток, содержащий запретные заклинания манипуляции душами.',
		type: 'scene',
		options: [
			{
				choice: 'Экспериментировать со свитком',
				nextScene: { id: 153, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 154, type: 'scene' } },
		],
	},
	{
		id: 95,
		text: 'Тень Вселенной была разгромлена! В ее логове вы находите таинственный артефакт, способный создавать иллюзии.',
		type: 'scene',
		options: [
			{
				choice: 'Попробовать создать иллюзию',
				nextScene: { id: 155, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 156, type: 'scene' } },
		],
	},
	{
		id: 96,
		text: 'Гидра страха была разгромлена! На ее месте возникает магический портал, ведущий в забытое царство мифических существ.',
		type: 'scene',
		options: [
			{ choice: 'Пройти через портал', nextScene: { id: 157, type: 'scene' } },
			{ choice: 'Остаться здесь', nextScene: { id: 158, type: 'scene' } },
		],
	},
	{
		id: 97,
		text: 'Пройдя мимо, вы видите древнюю алхимическую лабораторию. Возможно, здесь можно создать магический эликсир.',
		type: 'scene',
		options: [
			{
				choice: 'Исследовать лабораторию',
				nextScene: { id: 159, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 160, type: 'scene' } },
		],
	},

	{
		id: 98,
		text: 'Король грифонов был разгромлен! В его логове вы находите древний артефакт, способный контролировать стихии.',
		type: 'scene',
		options: [
			{
				choice: 'Испытать силу артефакта',
				nextScene: { id: 161, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 162, type: 'scene' } },
		],
	},
	{
		id: 99,
		text: 'Судья Ада был побежден! В его логове вы обнаруживаете таинственный кристалл, излучающий магическую энергию.',
		type: 'scene',
		options: [
			{
				choice: 'Принять энергию кристалла',
				nextScene: { id: 163, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 164, type: 'scene' } },
		],
	},
	{
		id: 100,
		text: 'Тень Вселенной была разгромлена! В ее логове вы обнаруживаете древний свиток, на котором записаны древние заклинания времени.',
		type: 'scene',
		options: [
			{
				choice: 'Изучить заклинания времени',
				nextScene: { id: 165, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 166, type: 'scene' } },
		],
	},
	{
		id: 101,
		text: 'Гидра страха была разгромлена! Из ее логова выходит загадочный таинственный торговец, предлагающий свои услуги в обмен на магические реликвии.',
		type: 'scene',
		options: [
			{
				choice: 'Поторговаться с таинственным торговцем',
				nextScene: { id: 167, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 168, type: 'scene' } },
		],
	},
	{
		id: 102,
		text: 'Пройдя мимо, вы обнаруживаете древний алтарь, покрытый магическими символами. Здесь можно провести магический ритуал.',
		type: 'scene',
		options: [
			{
				choice: 'Провести магический ритуал',
				nextScene: { id: 169, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 170, type: 'scene' } },
		],
	},
	{
		id: 103,
		text: 'Зверь Апокалипсиса был разгромлен! В его логове вы находите старинный свиток с пророчествами.',
		type: 'scene',
		options: [
			{
				choice: 'Прочитать пророчества',
				nextScene: { id: 171, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 172, type: 'scene' } },
		],
	},
	{
		id: 104,
		text: 'Судья Ада был побежден! В его логове вы обнаруживаете магический артефакт, способный отразить атаки врагов.',
		type: 'scene',
		options: [
			{ choice: 'Испытать артефакт', nextScene: { id: 173, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 174, type: 'scene' } },
		],
	},
	{
		id: 105,
		text: 'Тень Вселенной была разгромлена! В ее логове вы находите древний кристалл, способный усилить вашу магическую защиту.',
		type: 'scene',
		options: [
			{ choice: 'Принять кристалл', nextScene: { id: 175, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 176, type: 'scene' } },
		],
	},
	{
		id: 106,
		text: 'Гидра страха была разгромлена! В ее логове вы обнаруживаете артефакт, способный создавать магические порталы.',
		type: 'scene',
		options: [
			{ choice: 'Испытать порталы', nextScene: { id: 177, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 178, type: 'scene' } },
		],
	},
	{
		id: 107,
		text: 'Пройдя мимо, вы видите алхимическую лабораторию, где можно создать магический эликсир для восстановления сил.',
		type: 'scene',
		options: [
			{
				choice: 'Создать магический эликсир',
				nextScene: { id: 179, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 180, type: 'scene' } },
		],
	},
	{
		id: 108,
		text: 'Магия вихря была разгромлена! На месте ее исчезновения вы видите загадочный артефакт, излучающий магическую энергию.',
		type: 'scene',
		options: [
			{
				choice: 'Попробовать использовать артефакт',
				nextScene: { id: 181, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 182, type: 'scene' } },
		],
	},
	{
		id: 109,
		text: 'Лесной эльф был разгромлен! В его убежище вы обнаруживаете магическую фонтанку, излучающую исцеляющую энергию.',
		type: 'scene',
		options: [
			{
				choice: 'Попробовать восстановиться у фонтана',
				nextScene: { id: 183, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 184, type: 'scene' } },
		],
	},
	{
		id: 110,
		text: 'Горный тролль был побежден! В его пещере вы обнаруживаете древний свиток с заклинаниями управления природой.',
		type: 'scene',
		options: [
			{
				choice: 'Испытать заклинания управления природой',
				nextScene: { id: 185, type: 'scene' },
			},
			{ choice: 'Пройти мимо', nextScene: { id: 186, type: 'scene' } },
		],
	},
	{
		id: 111,
		text: 'Песчаный голем был побежден! В его руинах вы находите магический артефакт, способный усилить ваши защитные заклинания.',
		type: 'scene',
		options: [
			{ choice: 'Испытать артефакт', nextScene: { id: 187, type: 'scene' } },
			{ choice: 'Пройти мимо', nextScene: { id: 188, type: 'scene' } },
		],
	},
]
export default newTestScene
