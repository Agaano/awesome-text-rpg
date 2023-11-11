import { ItemType } from "../types/types";

export const items: ItemType[] = [
	{ id: 1, name: 'Меч', damage: 5, type: 'weapon'},
	{ id: 2, name: 'Зелье здоровья', healing: 15, type: 'potion'},
	{ id: 3, name: 'Шапка мудрости', special: 'Увеличивает магический урон', type: 'hat'},
	{ id: 4, name: 'Кольчуга героя', shield: 10, type: 'chest'},
	{ id: 5, name: 'Ботинки быстроты',agility: 10, special: 'Повышает скорость передвижения', type: 'boots'},
	{ id: 6, name: 'Кристальный посох', damage: 8, special: 'Наносит магический урон', type: 'weapon'},
	{ id: 16, name: 'Двуручный меч', damage: 15, type: 'weapon'},
	{ id: 7, name: 'Эликсир силы', special: 'Увеличивает физический урон', type: 'potion'},
	{ id: 8, name: 'Плащ невидимости', shield: 10, type: 'chest'},
	{ id: 9, name: 'Стальные поножи', shield: 5, type: 'pants'},
	{ id: 10, name: 'Легкие сапоги', shield: 10 ,special: 'Обеспечивают легкость движения', type: 'boots'},
	{ id: 17, name: 'Эликсир ловкости', special: 'Повышает шанс уклонения', shield: 10, type: 'potion'},
	{ id: 18, name: 'Колдовская шляпа', special: 'Усиливает заклинания', shield: 10 ,type: 'hat'},
	{ id: 19, name: 'Кольчуга тени', shield: 20, type: 'chest'},
	{ id: 20, name: 'Сапоги бури', special: 'Призывают ветер при движении', shield: 5, damage: 5, type: 'boots'},
	{ id: 21, name: 'Магический посох', damage: 20, special: 'Разрушительные заклинания', type: 'weapon'},
	{ id: 22, name: 'Ядовитое зелье', special: 'Наносит ядовитый урон', type: 'potion'},
	{ id: 23, name: 'Маска демона', shield: 10, type: 'hat'},
	{ id: 24, name: 'Плащ невидимости', special: 'Скрывает от врагов', type: 'chest'},
	{ id: 25, name: 'Стальные поножи', shield: 15, type: 'pants'},
];