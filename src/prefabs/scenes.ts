import { SceneType } from "../types/types";

const newScenes: Array<SceneType> = [
	{
		id: 0,
		text: 'Рады приветсвовать вас на нашей арене!',
		type: 'scene',
		options: [
			{ choice: 'Вступить в первый бой',nextScene: {id: 1, type: 'battle'} },
			{ choice: 'Я НЕ ХОЧУ!!!', nextScene: {id: -1, type: 'scene'}}
		],
	},
	{
		id: -1,
		text: 'Тебя не спрашивают...',
		type: 'scene',
		options: [
			{ choice: 'Вступить в первый бой',nextScene: {id: 1, type: 'battle'} },
			{ choice: 'НЕЕТ!!!', nextScene: {id: -1, type: 'scene'}}
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
			enemiesId: [1,1]
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
			enemiesId: [1,2,1]
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
			enemiesId: [2,2,4]
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
			enemiesId: [7,3]
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
			enemiesId: [6]
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
			enemiesId: [15,15,15]
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
			enemiesId: [23,22]
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
			enemiesId: [26,26]
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
			enemiesId: [20,31]
		},
		nextScene: 1,
	},
]

const scenes: Array<SceneType> = [
	{
		id: 0,
		text: 'Вы проснулись в темной комнате. Перед вами две двери. Как вы поступите?',
		type: 'scene',
		options: [
		  { choice: 'Войти в левую дверь', nextScene: { id: 1, type: 'scene' } },
		  { choice: 'Войти в правую дверь', nextScene: { id: 2, type: 'scene' } },
		],
	  },
	  {
		id: 1,
		text: 'Вы оказались в заколдованной библиотеке. Книги на полках шевелятся. Ваши действия?',
		type: 'scene',
		options: [
		  { choice: 'Попробовать прочитать заколдованный свиток', nextScene: { id: 3, type: 'scene' } },
		  { choice: 'Попытаться покинуть библиотеку', nextScene: { id: 4, type: 'scene' } },
		],
	  },
	  {
		id: 2,
		text: 'Вы вступили в темный лес. Перед вами три тропы. Куда вы направитесь?',
		type: 'scene',
		options: [
		  { choice: 'Следовать по левой тропе', nextScene: { id: 3, type: 'scene' } },
		  { choice: 'Идти по центральной тропе', nextScene: { id: 6, type: 'scene' } },
		  { choice: 'Выбраться из леса', nextScene: { id: 7, type: 'scene' } },
		],
	  },
	  {
		id: 3,
		text: 'На вас напал СКЕЛЕТ!!',
		type: 'battle',
		options: [
		  { choice: 'Ударить', type: 'attack' },
		  { choice: 'Похилиться', type: 'healing' },
		  { choice: 'Сбежать, визжа как маленькая девочка', type: 'leave' },
		],
		nextScene: 4,
		battle: {
		  enemiesId: [1, 1,],
		},
	  },
	  {
		id: 4,
		text: 'Вы продолжили свой путь и встретили ЗОМБИ!! Как вы с этим справитесь?',
		type: 'battle',
		options: [
		  { choice: 'Атаковать зомби', type: 'attack' },
		  { choice: 'Использовать магию заживления', type: 'healing' },
		  { choice: 'Попробовать обойти зомби', type: 'leave' },
		],
		nextScene: 5,
		battle: {
		  enemiesId: [2],
		},
	  },
	  {
		id: 5,
		text: 'Зомби повержен, и вы можете продолжить свой путь.',
		type: 'scene',
		options: [
		  { choice: 'Прыгнуть в яму', nextScene: { id: Math.abs(Math.floor(Math.random() * 40)), type: 'scene' } },
		  { choice: 'Поискать дополнительные ресурсы', nextScene: { id: 9, type: 'scene' } },
		],
	  },
	  {
		id: 6,
		text: 'Вы выбрали центральную тропу и оказались перед рекой. Как вы переправитесь?',
		type: 'scene',
		options: [
		  { choice: 'Попробовать переплыть', nextScene: { id: 10, type: 'scene' } },
		  { choice: 'Найти мост или брод', nextScene: { id: 11, type: 'scene' } },
		  { choice: 'Вернуться и выбрать другую тропу', nextScene: { id: 2, type: 'scene' } },
		],
	  },
	  {
		id: 7,
		text: 'Вы выбрались из леса и оказались перед городским воротами. Как вы взаимодействуете с стражниками?',
		type: 'scene',
		options: [
		  { choice: 'Подойти и рассказать о своих приключениях', nextScene: { id: 12, type: 'scene' } },
		  { choice: 'Спрятаться и попытаться пройти незаметно', nextScene: { id: 13, type: 'scene' } },
		],
	  },
	  {
		id: 8,
		text: 'Пройдя дальше, вы встречаете ВАРВАРА!! Что вы предпримете?',
		type: 'battle',
		options: [
		  { choice: 'Сразиться с варваром', type: 'attack' },
		  { choice: 'Обмануть варвара и уклониться от боя', type: 'leave' },
		],
		nextScene: 14,
		battle: {
		  enemiesId: [4],
		},
	  },
	  {
		id: 9,
		text: 'Вы находите таинственный артефакт. Как вы будете использовать его?',
		type: 'scene',
		options: [
		  { choice: 'Применить артефакт для вызова союзного дракона', nextScene: { id: 15, type: 'scene' } },
		  { choice: 'Продать артефакт торговцу', nextScene: { id: 16, type: 'scene' } },
		],
	  },
	  {
		id: 10,
		text: 'Попытка переплыть реку оказалась сложной задачей. Вы столкнулись с ВОДНЫМ ЭЛЕМЕНТАЛЕМ! Как вы с этим справитесь?',
		type: 'battle',
		options: [
		  { choice: 'Сразиться с водным элементалем', type: 'attack' },
		  { choice: 'Использовать магический артефакт для защиты', type: 'shield' },
		  { choice: 'Попробовать убежать', type: 'leave' },
		],
		nextScene: 17,
		battle: {
		  enemiesId: [5],
		},
	  },
	  {
		id: 11,
		text: 'Вы нашли мост через реку, но перед вами возник ЗЛОБНЫЙ МАГ! Что вы предпримете?',
		type: 'battle',
		options: [
		  { choice: 'Использовать заклинание атаки против мага', type: 'attack' },
		  { choice: 'Попробовать пройти мимо незаметно', type: 'leave' },
		  { choice: 'Попытаться уговорить мага не нападать', type: 'shield' },
		],
		nextScene: 18,
		battle: {
		  enemiesId: [6],
		},
	  },
	  {
		id: 12,
		text: 'Рассказав стражникам свои приключения, вы вызываете интерес у ГЛАВЫ ГОРОДА. Как вы ответите на его вопросы?',
		type: 'scene',
		options: [
		  { choice: 'Откровенно рассказать о своих приключениях', nextScene: { id: 19, type: 'scene' } },
		  { choice: 'Сказать, что это была обычная прогулка', nextScene: { id: 20, type: 'scene' } },
		],
	  },
	  {
		id: 13,
		text: 'Ваша попытка пройти мимо стражников не удалась, они требуют ваши документы. Как вы поступите?',
		type: 'scene',
		options: [
		  { choice: 'Показать им ваши документы', nextScene: { id: 21, type: 'scene' } },
		  { choice: 'Попытаться убежать', nextScene: { id: 22, type: 'scene' } },
		],
	  },
	  {
		id: 14,
		text: 'Сражение с варваром оказалось сложным испытанием. Вам нужна помощь. Что вы сделаете?',
		type: 'scene',
		options: [
		  { choice: 'Вызвать дракона на помощь', nextScene: { id: 23, type: 'scene' } },
		  { choice: 'Попытаться заключить мир', nextScene: { id: 24, type: 'scene' } },
		],
	  },
	  {
		id: 15,
		text: 'Применение артефакта вызвало дракона, и он теперь стоит перед вами. Как вы с ним взаимодействуете?',
		type: 'scene',
		options: [
		  { choice: 'Попытаться подружиться с драконом', nextScene: { id: 25, type: 'scene' } },
		  { choice: 'Попросить дракона уйти', nextScene: { id: 26, type: 'scene' } },
		],
	  },
	  {
		id: 16,
		text: 'Торговец заинтересовался артефактом. Как вы договоритесь о сделке?',
		type: 'scene',
		options: [
		  { choice: 'Продать артефакт по высокой цене', nextScene: { id: 27, type: 'scene' } },
		  { choice: 'Отказаться продавать', nextScene: { id: 28, type: 'scene' } },
		],
	  },
	  {
		id: 17,
		text: 'Встреча с водным элементалем оставила вас обессиленным. Как вы восстановите свою силу?',
		type: 'scene',
		options: [
		  { choice: 'Использовать магический напиток восстановления', nextScene: { id: 29, type: 'scene' } },
		  { choice: 'Отправиться в поисках лекарственных трав', nextScene: { id: 30, type: 'scene' } },
		],
	  },
	  {
		id: 18,
		text: 'Ваше столкновение с злобным магом вызвало повреждения. Как вы их излечите?',
		type: 'scene',
		options: [
		  { choice: 'Использовать заклинание исцеления', nextScene: { id: 31, type: 'scene' } },
		  { choice: 'Попробовать найти целебные травы в окрестностях', nextScene: { id: 32, type: 'scene' } },
		],
	  },
	  {
		id: 19,
		text: 'Глава города предложил вам помощь. Какую услугу вы запросите у него?',
		type: 'scene',
		options: [
		  { choice: 'Защиту в путешествиях по окрестностям', nextScene: { id: 33, type: 'scene' } },
		  { choice: 'Материальную помощь для следующего приключения', nextScene: { id: 34, type: 'scene' } },
		],
	  },
	  {
		id: 20,
		text: 'Вы решили солгать главе города. Как вы прикроете свою ложь?',
		type: 'scene',
		options: [
		  { choice: 'Подделать доказательства своих приключений', nextScene: { id: 35, type: 'scene' } },
		  { choice: 'Попросить своих друзей подтвердить ваш рассказ', nextScene: { id: 36, type: 'scene' } },
		],
	  },
	  {
		id: 21,
		text: 'Стражники просят вас объяснить, откуда вы взялись в городе. Как будете действовать?',
		type: 'scene',
		options: [
		  { choice: 'Рассказать правду о своем происхождении', nextScene: { id: 37, type: 'scene' } },
		  { choice: 'Придумать фальшивую историю', nextScene: { id: 38, type: 'scene' } },
		],
	  },
	  {
		id: 22,
		text: 'Ваша попытка убежать вызывает подозрение у стражников. Что вы предпримете?',
		type: 'scene',
		options: [
		  { choice: 'Остановиться и рассказать правду', nextScene: { id: 39, type: 'scene' } },
		  { choice: 'Усилить попытку убежать, прибегнув к магии', nextScene: { id: 40, type: 'scene' } },
		],
	  },
	  {
		id: 23,
		text: 'Варвар оказался слишком мощным для вас. Как вы планируете вернуться к приключениям?',
		type: 'scene',
		options: [
		  { choice: 'Собрать команду союзников', nextScene: { id: 41, type: 'scene' } },
		  { choice: 'Обучиться новым навыкам у опытного ментора', nextScene: { id: 42, type: 'scene' } },
		],
	  },
	  {
		id: 24,
		text: 'Попытка мира с варваром оказалась успешной. Он предлагает вам союз в следующем приключении. Как вы ответите?',
		type: 'scene',
		options: [
		  { choice: 'Принять предложение и объединиться', nextScene: { id: 43, type: 'scene' } },
		  { choice: 'Отказаться и идти своим путем', nextScene: { id: 44, type: 'scene' } },
		],
	  },
	  {
		id: 25,
		text: 'Дракон оказался дружелюбным и готов помочь вам в приключениях. Как вы будете использовать его помощь?',
		type: 'scene',
		options: [
		  { choice: 'Летать на драконе для быстрого перемещения', nextScene: { id: 45, type: 'scene' } },
		  { choice: 'Просить дракона помогать в сражениях', nextScene: { id: 46, type: 'scene' } },
		],
	  },
	  {
		id: 26,
		text: 'Дракон не желает уходить и требует вашего внимания. Как вы справитесь с этой ситуацией?',
		type: 'scene',
		options: [
		  { choice: 'Постараться уговорить дракона уйти', nextScene: { id: 47, type: 'scene' } },
		  { choice: 'Принять дракона в свой отряд', nextScene: { id: 48, type: 'scene' } },
		],
	  },
	  {
		id: 27,
		text: 'Торговец предлагает вам еще больше золота за артефакт. Как вы решите?',
		type: 'scene',
		options: [
		  { choice: 'Продать артефакт за большую сумму', nextScene: { id: 49, type: 'scene' } },
		  { choice: 'Оставить артефакт себе, несмотря на предложение', nextScene: { id: 50, type: 'scene' } },
		],
	  },
	  {
		id: 29,
		text: 'Вы нашли магический напиток восстановления в старом сундуке. Как вы будете использовать его?',
		type: 'scene',
		options: [
		  { choice: 'Выпить напиток, чтобы моментально восстановить здоровье', nextScene: { id: 53, type: 'scene' } },
		  { choice: 'Сохранить напиток для более трудных испытаний', nextScene: { id: 54, type: 'scene' } },
		],
	  },
	  {
		id: 30,
		text: 'Ваш поиск лекарственных трав привел вас к опасной ядовитой растительности. Как вы будете собирать травы?',
		type: 'scene',
		options: [
		  { choice: 'Использовать магический защитный костюм', nextScene: { id: 55, type: 'scene' } },
		  { choice: 'Попытаться собирать травы с осторожностью', nextScene: { id: 56, type: 'scene' } },
		],
	  },
	  {
		id: 31,
		text: 'Использование заклинания исцеления успешно излечило ваши повреждения. Как будете благодарить своего помощника?',
		type: 'scene',
		options: [
		  { choice: 'Подарить магу магический артефакт', nextScene: { id: 57, type: 'scene' } },
		  { choice: 'Выразить слова благодарности', nextScene: { id: 58, type: 'scene' } },
		],
	  },
	  {
		id: 32,
		text: 'Ваш поиск целебных трав оказался трудным, и вы не нашли ничего полезного. Как вы будете продолжать?',
		type: 'scene',
		options: [
		  { choice: 'Попытаться найти альтернативные источники исцеления', nextScene: { id: 59, type: 'scene' } },
		  { choice: 'Вернуться в город за помощью', nextScene: { id: 60, type: 'scene' } },
		],
	  },
	  {
		id: 33,
		text: 'Глава города предоставляет вам эскорт для безопасных путешествий. Как вы будете использовать этот эскорт?',
		type: 'scene',
		options: [
		  { choice: 'Просить их сражаться на вашей стороне', nextScene: { id: 61, type: 'scene' } },
		  { choice: 'Использовать их опыт для обучения новых навыков', nextScene: { id: 62, type: 'scene' } },
		],
	  },
	  {
		id: 34,
		text: 'Глава города предлагает вам финансовую поддержку на следующее приключение. Как вы распорядитесь этими средствами?',
		type: 'scene',
		options: [
		  { choice: 'Приобрести лучшее снаряжение', nextScene: { id: 63, type: 'scene' } },
		  { choice: 'Использовать деньги для благотворительных целей', nextScene: { id: 64, type: 'scene' } },
		],
	  },
	  {
		id: 35,
		text: 'Вы решаете подделать доказательства своих приключений. Как вы будете это делать?',
		type: 'scene',
		options: [
		  { choice: 'Использовать магию для создания фальшивых свидетельств', nextScene: { id: 65, type: 'scene' } },
		  { choice: 'Найти поддельные предметы, чтобы убедить главу города', nextScene: { id: 66, type: 'scene' } },
		],
	  },
	  {
		id: 36,
		text: 'Вы просите своих друзей подтвердить ваш рассказ. Как они отреагируют на ваш запрос?',
		type: 'scene',
		options: [
		  { choice: 'Согласятся помочь и поддержат вас', nextScene: { id: 67, type: 'scene' } },
		  { choice: 'Откажутся из-за опасности вашего приключения', nextScene: { id: 68, type: 'scene' } },
		],
	  },
	  {
		id: 37,
		text: 'Рассказав правду стражникам, вы вызываете их интерес. Что они предложат вам?',
		type: 'scene',
		options: [
		  { choice: 'Помощь в поиске информации о вашем происхождении', nextScene: { id: 69, type: 'scene' } },
		  { choice: 'Предоставление временного жилья в городе', nextScene: { id: 70, type: 'scene' } },
		],
	  },
	  {
		id: 38,
		text: 'Вы придумываете фальшивую историю, чтобы скрыть свое происхождение. Как вы поддержите свою ложь?',
		type: 'scene',
		options: [
		  { choice: 'Завести вымышленные документы для подтверждения истории', nextScene: { id: 71, type: 'scene' } },
		  { choice: 'Постараться убедить стражников с помощью уловок и чар', nextScene: { id: 72, type: 'scene' } },
		],
	  },
	  {
		id: 39,
		text: 'Остановив свою попытку убежать, вы рассказываете правду стражникам. Как они отреагируют на ваш рассказ?',
		type: 'scene',
		options: [
		  { choice: 'Верят вам и предлагают помощь в поиске вашего происхождения', nextScene: { id: 73, type: 'scene' } },
		  { choice: 'Остаются недоверчивыми и требуют дополнительных доказательств', nextScene: { id: 74, type: 'scene' } },
		],
	  },
	  {
		id: 40,
		text: 'Ваша попытка сбежать привлекает внимание стражи. Как вы будете реагировать на их преследование?',
		type: 'scene',
		options: [
		  { choice: 'Попытаться скрыться в толпе горожан', nextScene: { id: 75, type: 'scene' } },
		  { choice: 'Бежать в леса, пытаясь уйти от стражников', nextScene: { id: 76, type: 'scene' } },
		],
	  },
	  {
		id: 41,
		text: 'Стражники арестовывают вас за нарушение законов города. Как вы будете защищать себя перед судом?',
		type: 'scene',
		options: [
		  { choice: 'Найти адвоката и пытаться доказать невиновность', nextScene: { id: 77, type: 'scene' } },
		  { choice: 'Попытаться договориться с властями и избежать суда', nextScene: { id: 78, type: 'scene' } },
		],
	  },
	  {
		id: 42,
		text: 'Ваша попытка сбежать не увенчалась успехом, и стражники догнали вас. Как вы планируете оправдаться?',
		type: 'scene',
		options: [
		  { choice: 'Утверждать, что вас преследовали неизвестные злодеи', nextScene: { id: 79, type: 'scene' } },
		  { choice: 'Извиниться и объяснить свою попытку убежать из-за недопонимания', nextScene: { id: 80, type: 'scene' } },
		],
	  },
	  {
		id: 43,
		text: 'Поддавшись страху, вы соглашаетесь на условия торговца. Как вы выполните его задание?',
		type: 'scene',
		options: [
		  { choice: 'Собраться с силами и попытаться выполнить задание', nextScene: { id: 81, type: 'scene' } },
		  { choice: 'Попытаться обмануть торговца, предоставив фальшивые результаты', nextScene: { id: 82, type: 'scene' } },
		],
	  },
	  {
		id: 44,
		text: 'Вы пытаетесь взять верх над торговцем, предложив сделку в свою пользу. Как вы ведете переговоры?',
		type: 'scene',
		options: [
		  { choice: 'Использовать логику и убеждение', nextScene: { id: 83, type: 'scene' } },
		  { choice: 'Применить шарм и чары, чтобы добиться выгодных условий', nextScene: { id: 84, type: 'scene' } },
		],
	  },
	  {
		id: 45,
		text: 'Ваше решение не предоставить артефакт торговцу вызывает его гнев. Как вы собираетесь справиться с этой ситуацией?',
		type: 'scene',
		options: [
		  { choice: 'Попытаться успокоить торговца и объяснить свою точку зрения', nextScene: { id: 85, type: 'scene' } },
		  { choice: 'Подготовиться к бою и защититься от торговца', nextScene: { id: 86, type: 'scene' } },
		],
	  },
	  {
		id: 46,
		text: 'Торговец благодарит вас за честность и предлагает дополнительные награды за вашу честность. Как вы примете его предложение?',
		type: 'scene',
		options: [
		  { choice: 'Принять награды и благодарить торговца', nextScene: { id: 87, type: 'scene' } },
		  { choice: 'Отказаться от дополнительных наград и уйти', nextScene: { id: 88, type: 'scene' } },
		],
	  },
	  {
		id: 47,
		text: 'Торговец возвращает вам артефакт, выразив благодарность за вашу честность. Как вы будете использовать артефакт?',
		type: 'scene',
		options: [
		  { choice: 'Применить его для получения силы и защиты', nextScene: { id: 89, type: 'scene' } },
		  { choice: 'Спрятать артефакт для будущих приключений', nextScene: { id: 90, type: 'scene' } },
		],
	  },
	  {
		id: 48,
		text: 'Торговец отказывается вернуть вам артефакт, утверждая, что он теперь его владелец. Как вы реагируете на этот оборот событий?',
		type: 'scene',
		options: [
		  { choice: 'Обратиться за помощью к стражникам', nextScene: { id: 91, type: 'scene' } },
		  { choice: 'Попытаться вернуть артефакт силой', nextScene: { id: 92, type: 'scene' } },
		],
	  },
];
export default newScenes