import { EnemyType } from "../types/types"

const enemies: EnemyType[] = [
	{ id: 1, name: 'Скелет', damage: 8, hp: 12, maxHp: 12, range: 'melee', img: 'src/assets/ArchSkeleton.png' },
	{ id: 2, name: 'Зомби', damage: 6, hp: 25, maxHp: 25, range: 'melee' , img: 'src/assets/zombie.png' },
	{ id: 3, name: 'Скелет-лучник', damage: 5, hp: 22, maxHp: 22, range: 'ranged' , img: 'src/assets/ArchSkeleton.png' },
	{ id: 4, name: 'Варвар', damage: 22, hp: 25, maxHp: 25, range: 'melee', img: 'src/assets/barbarian.png' },
	{ id: 5, name: 'Водный элементаль', damage: 18, hp: 20, maxHp: 20, range: 'ranged', img: 'src/assets/' },
	{ id: 6, name: 'Злобный маг', damage: 28, hp: 18, maxHp: 18, range: 'ranged', img: 'src/assets/' },
	{ id: 7, name: 'Огненный дракон', damage: 35, hp: 60, maxHp: 60, range: 'ranged', img: 'src/assets/FlameDrago.png' },
	{ id: 8, name: 'Ледяной великан', damage: 30, hp: 70, maxHp: 70, range: 'melee', img: 'src/assets/IceGiant.png' },
	{ id: 9, name: 'Темный рыцарь', damage: 45, hp: 35, maxHp: 35, range: 'melee', img: 'src/assets/DarkKnight.png' },
	{ id: 11, name: 'Лесной эльф', damage: 25, hp: 30, maxHp: 30, range: 'ranged', img: 'src/assets/' },
	{ id: 12, name: 'Горный тролль', damage: 35, hp: 40, maxHp: 40, range: 'melee', img: 'src/assets/' },
	{ id: 13, name: 'Песчаный голем', damage: 30, hp: 50, maxHp: 50, range: 'melee', img: 'src/assets/' },
	{ id: 14, name: 'Энергетический призрак', damage: 40, hp: 20, maxHp: 20, range: 'ranged', img: 'src/assets/' },
	{ id: 15, name: 'Живая тень', damage: 35, hp: 25, maxHp: 25, range: 'ranged', img: 'src/assets/' },
	{ id: 16, name: 'Стальной грифон', damage: 30, hp: 30, maxHp: 30, range: 'melee', img: 'src/assets/' },
	{ id: 17, name: 'Ветряной элементаль', damage: 25, hp: 20, maxHp: 20, range: 'ranged', img: 'src/assets/' },
	{ id: 18, name: 'Земной голем', damage: 35, hp: 40, maxHp: 40, range: 'melee', img: 'src/assets/' },
	{ id: 19, name: 'Маг огня', damage: 45, hp: 25, maxHp: 25, range: 'ranged', img: 'src/assets/' },
	{ id: 20, name: 'Скользкая медуза', damage: 30, hp: 30, maxHp: 30, range: 'melee', img: 'src/assets/' },
	{ id: 21, name: 'Летучая химера', damage: 40, hp: 35, maxHp: 35, range: 'ranged', img: 'src/assets/' },
	{ id: 22, name: 'Каменная гарпия', damage: 35, hp: 40, maxHp: 40, range: 'melee', img: 'src/assets/' },
	{ id: 23, name: 'Леденящий вампир', damage: 50, hp: 25, maxHp: 25, range: 'ranged', img: 'src/assets/' },
	{ id: 24, name: 'Молниеносный элементаль', damage: 45, hp: 20, maxHp: 20, range: 'ranged', img: 'src/assets/' },
	{ id: 25, name: 'Трещащий голем', damage: 30, hp: 50, maxHp: 50, range: 'melee', img: 'src/assets/' },
	{ id: 26, name: 'Пылающий дьявол', damage: 40, hp: 30, maxHp: 30, range: 'ranged', img: 'src/assets/' },

	//Bosses
	{ id: 27, name: 'Дракон Хаоса', damage: 70, hp: 120, maxHp: 120, range: 'ranged', img: 'src/assets/' },
	{ id: 28, name: 'Лич королевства мертвых', damage: 80, hp: 150, maxHp: 150, range: 'ranged', img: 'src/assets/' },
	{ id: 29, name: 'Архидемон', damage: 90, hp: 180, maxHp: 180, range: 'ranged', img: 'src/assets/' },
	{ id: 30, name: 'Темный колосс', damage: 100, hp: 250, maxHp: 250, range: 'melee', img: 'src/assets/' },
	{ id: 31, name: 'Гидра страха', damage: 110, hp: 220, maxHp: 220, range: 'ranged', img: 'src/assets/' },
	{ id: 32, name: 'Король грифонов', damage: 120, hp: 200, maxHp: 200, range: 'melee', img: 'src/assets/' },
	{ id: 33, name: 'Левиафан мрака', damage: 130, hp: 280, maxHp: 280, range: 'ranged', img: 'src/assets/' },
	{ id: 34, name: 'Судья Ада', damage: 140, hp: 320, maxHp: 320, range: 'ranged', img: 'src/assets/' },
	{ id: 35, name: 'Тень Вселенной', damage: 150, hp: 280, maxHp: 280, range: 'ranged', img: 'src/assets/' },
	{ id: 36, name: 'Зверь Апокалипсиса', damage: 170, hp: 350, maxHp: 350, range: 'melee', img: 'src/assets/' }
]

export default enemies