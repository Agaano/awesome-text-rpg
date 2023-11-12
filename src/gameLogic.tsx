import React, { useState } from 'react'
import { useModalAlert, useModalConfirm } from './hooks/useModalAlert'
import { items, getRandomItemId } from './prefabs/items'
import scenes from './prefabs/scenes'
import {
	BattleOptionType,
	EnemyType,
	GameStateType,
	ItemType,
	OptionType,
	SceneType,
} from './types/types'

const enemies: EnemyType[] = [
	{ id: 1, name: 'Скелет', damage: 8, hp: 12, maxHp: 12, range: 'melee' },
	{ id: 2, name: 'Зомби', damage: 6, hp: 25, maxHp: 25, range: 'melee' },
	{ id: 3, name: 'Скелет-лучник', damage: 5, hp: 22, maxHp: 22, range: 'ranged' },
	{ id: 4, name: 'Варвар', damage: 22, hp: 25, maxHp: 25, range: 'melee' },
	{ id: 5, name: 'Водный элементаль', damage: 18, hp: 20, maxHp: 20, range: 'ranged' },
	{ id: 6, name: 'Злобный маг', damage: 28, hp: 18, maxHp: 18, range: 'ranged' },
	{ id: 7, name: 'Огненный дракон', damage: 35, hp: 60, maxHp: 60, range: 'ranged' },
	{ id: 8, name: 'Ледяной великан', damage: 30, hp: 70, maxHp: 70, range: 'melee' },
	{ id: 9, name: 'Темный рыцарь', damage: 45, hp: 35, maxHp: 35, range: 'melee' },
	{ id: 10, name: 'Магия вихря', damage: 40, hp: 45, maxHp: 45, range: 'ranged' },
	{ id: 11, name: 'Лесной эльф', damage: 25, hp: 30, maxHp: 30, range: 'ranged' },
	{ id: 12, name: 'Горный тролль', damage: 35, hp: 40, maxHp: 40, range: 'melee' },
	{ id: 13, name: 'Песчаный голем', damage: 30, hp: 50, maxHp: 50, range: 'melee' },
	{ id: 14, name: 'Энергетический призрак', damage: 40, hp: 20, maxHp: 20, range: 'ranged' },
	{ id: 15, name: 'Живая тень', damage: 35, hp: 25, maxHp: 25, range: 'ranged' },
	{ id: 16, name: 'Стальной грифон', damage: 30, hp: 30, maxHp: 30, range: 'melee' },
	{ id: 17, name: 'Ветряной элементаль', damage: 25, hp: 20, maxHp: 20, range: 'ranged' },
	{ id: 18, name: 'Земной голем', damage: 35, hp: 40, maxHp: 40, range: 'melee' },
	{ id: 19, name: 'Маг огня', damage: 45, hp: 25, maxHp: 25, range: 'ranged' },
	{ id: 20, name: 'Скользкий медуза', damage: 30, hp: 30, maxHp: 30, range: 'melee' },
	{ id: 21, name: 'Летучий химера', damage: 40, hp: 35, maxHp: 35, range: 'ranged' },
	{ id: 22, name: 'Каменный гарпия', damage: 35, hp: 40, maxHp: 40, range: 'melee' },
	{ id: 23, name: 'Леденящий вампир', damage: 50, hp: 25, maxHp: 25, range: 'ranged' },
	{ id: 24, name: 'Молниеносный элементаль', damage: 45, hp: 20, maxHp: 20, range: 'ranged' },
	{ id: 25, name: 'Трещащий голем', damage: 30, hp: 50, maxHp: 50, range: 'melee' },
	{ id: 26, name: 'Пылающий дьявол', damage: 40, hp: 30, maxHp: 30, range: 'ranged' },

	//Bosses
	{ id: 27, name: 'Дракон Хаоса', damage: 70, hp: 120, maxHp: 120, range: 'ranged' },
	{ id: 28, name: 'Лич королевства мертвых', damage: 80, hp: 150, maxHp: 150, range: 'ranged' },
	{ id: 29, name: 'Архидемон', damage: 90, hp: 180, maxHp: 180, range: 'ranged' },
	{ id: 30, name: 'Темный колосс', damage: 100, hp: 250, maxHp: 250, range: 'melee' },
	{ id: 31, name: 'Гидра страха', damage: 110, hp: 220, maxHp: 220, range: 'ranged' },
	{ id: 32, name: 'Король грифонов', damage: 120, hp: 200, maxHp: 200, range: 'melee' },
	{ id: 33, name: 'Левиафан мрака', damage: 130, hp: 280, maxHp: 280, range: 'ranged' },
	{ id: 34, name: 'Судья Ада', damage: 140, hp: 320, maxHp: 320, range: 'ranged' },
	{ id: 35, name: 'Тень Вселенной', damage: 150, hp: 280, maxHp: 280, range: 'ranged' },
	{ id: 36, name: 'Зверь Апокалипсиса', damage: 170, hp: 350, maxHp: 350, range: 'melee' }
]

export const complexQuests = [
	{
		text: 'Вы встречаете таинственного незнакомца. Как вы поступите?',
		options: [
			{ choice: 'Поприветствовать и спросить, кто он', nextScene: 10 },
			{ choice: 'Осторожно приготовиться к бою', nextScene: 11 },
		],
	},
]

type set = {
	set: number[]
	damage?: number
	healing?: number
	special?: string
	shield?: number
	agility?: number
	fortune?: number
}

export const sets: set[] = [
	{
		set: [1, 2, 3, 4, 5],
		damage: 5,
	},
	{
		set: [6, 7, 8, 9, 10],
	},
]

export const npcs = [
	{
		name: 'Торговец',
		description:
			'Приветствую, путник! У меня есть великолепные товары. Что тебе нужно?',
	},
]

const initialAgility = 25
const initialDamage = 5
const initialProtection = 0
const initialHealth = 100
const initialFortune = 25
const initialMassDamage = 0

export function useGameLogic(): [
	GameStateType,
	() => void,
	(option: any) => void,
	(option: any) => void,
	EnemyType[] | undefined,
	any,
	any
] {
	const [currentScene, setCurrentScene] = useState<SceneType>(scenes[0])
	const [previousScene, setPreviousScene] = useState<number>(0)
	const [inventory, setInventory] = useState<ItemType[]>([])
	const [health, setHealth] = useState<number>(initialHealth)
	const [battleState, setBattleState] = useState<undefined | EnemyType[]>()
	const [ConfirmWindow, callConfirm] = useModalConfirm()
	const [AlertWindow, callAlert] = useModalAlert()
	const agility = inventory.reduce(
		(acc, item) => (acc += item?.agility ?? 0),
		initialAgility
	)
	console.log(previousScene)
	const damage = inventory.reduce(
		(acc, items) => (acc += items?.damage ?? 0),
		initialDamage
	)
	const protection = inventory.reduce(
		(acc, item) => (acc += item?.shield ?? 0),
		initialProtection
	)
	const fortune = inventory.reduce(
		(acc, item) => (acc += item?.fortune ?? 0),
		initialFortune
	)
	const massDamage = inventory.reduce(
		(acc, item) => (acc += item?.massDamage ?? 0),
		initialMassDamage
	)
	const startGame = (): void => {
		setCurrentScene(scenes[0])
		setInventory([])
		setHealth(100)
		setBattleState(undefined)
		setPreviousScene(0)
		pickItems([1,2,3])
	}

	const gameState: GameStateType = {
		currentScene,
		inventory,
		health,
		damage,
		protection,
		agility,
		fortune,
		massDamage,
	}

	const goToScene = (sceneIndex: number) => {
		const scene = scenes.find(scene => scene.id === sceneIndex) ?? scenes[0]
		if (scene.type === 'battle') startBattle(scene)
		setCurrentScene(scene)
	}

	const startBattle = (scene: SceneType) => {
		setPreviousScene(currentScene.id)
		const enemiesArr = scene.battle?.enemiesId.map((enemyId) => {return getEnemyById(enemyId) ?? enemies[0]})
		setBattleState(enemiesArr)
	}

	const getEnemyById = (id: number) => {
		const enemy = enemies.find(enemy => enemy.id === id) ?? enemies[0]
		return enemy
	}

	const makeChoice = (option: OptionType): void => {
		goToScene(option.nextScene.id)
	}

	const leaveTheBattle = () => {
		if (!currentScene.nextScene || !battleState) return
		setBattleState(undefined)
		goToScene(currentScene.nextScene)
	}

	const killTheEnemy = (arr: EnemyType[],id: number) => {
		if (!arr?.[id]) return arr;
		return removeByIndex(arr, id);
	}

	const healHp = (hp: number) => {
		setHealth(prev => (prev += hp))
	}

	const biteHp = (hp: number) => {
		const protectionCoff = 1 - protection / 100
		setHealth(prev => {
			if (prev - hp * protectionCoff <= 0) {
				callAlert('Вы проиграли!!!! В следующий раз будьте внимательнее!!!')
				startGame()
			}
			return (prev -= hp * protectionCoff)
		})
	}

	const victoryInBattle = () => {
		if (Math.random() <= Math.abs(fortune) / 100) pickItem(getRandomItemId())
		leaveTheBattle()
	}

	const makeBattleChoice = (option: BattleOptionType): void => {
		if (currentScene.type !== 'battle' || !battleState) return
		if (option.type === 'attack') {
			if (!battleState?.[0] || !battleState) return
			setBattleState(prev => {
				let curr = prev?.map((enemy, index) => ({...enemy, hp: index === 0 ? enemy.hp - damage : enemy.hp - (damage * (massDamage / 100)) }))
				const deadEnemiesId = findDeadEnemies(curr ?? []); 
				if (deadEnemiesId.length > 0) {
					deadEnemiesId.map((id) => {
						curr = killTheEnemy(curr ?? [], id)
						if (curr.length <= 0) victoryInBattle();
					})
				}
				let totalEnemiesDamage = curr?.reduce((acc, enemy, index) => acc += Math.random() > (agility / 100) ? (index === 0 && enemy.range === 'melee' ? enemy.damage : enemy.range === 'ranged' ? enemy.damage : 0) : 0, 0) ?? 0;
				biteHp(totalEnemiesDamage);
				return curr
			})
			
		} else if (option.type === 'healing') {
			const heal = inventory.reduce(
				(acc, item) => (acc += item?.healing ?? 0),
				0
			)
			setInventory(prev => {
				const index = prev.findIndex(item => item.healing)
				return removeByIndex(prev, index)
			})
			if (heal <= 0) return
			healHp(heal)
		} else if (option.type === 'leave') {
			callConfirm('Вы уверены что хотите сбежать?')?.then(value => {
				if (value) {
					biteHp(battleState.reduce((acc,enemy) => acc+= enemy.damage, 0) / 2)
					leaveTheBattle()
				}
			})
		}
	}

	function removeByIndex(array: Array<any>, index: number) {
		if (index < 0 || index >= array.length) {
			return array
		}

		const newArray = new Array(array.length - 1)
		for (let i = 0; i < index; i++) {
			newArray[i] = array[i]
		}
		for (let i = index + 1; i < array.length; i++) {
			newArray[i - 1] = array[i]
		}

		return newArray
	}

	function findDeadEnemies(array: Array<EnemyType>) {
		const results = []
		let i = 0;
		for (const object of array) {
			if (object.hp <= 0) {
				results.push(i)
			}
			i++
		}
		return results
	}

	function findByProperty(array: Array<any>, property: string, value: any) {
		const results = []
		for (const object of array) {
			if (object[property] === value) {
				results.push(object)
			}
		}
		return results
	}

	const getItemById = (itemId: number) => {
		const item = items.find(item => item.id === itemId) ?? items[0]
		if (!item) return items[0]
		return item
	}

	const getStatsDifferences = (
		inventory1: ItemType[],
		inventory2: ItemType[]
	) => {
		const firstStats = {
			damage: inventory1.reduce(
				(acc, item) => (acc += item?.damage ?? 0),
				initialDamage
			),
			shield: inventory1.reduce(
				(acc, item) => (acc += item?.shield ?? 0),
				initialProtection
			),
			agility: inventory1.reduce(
				(acc, item) => (acc += item?.agility ?? 0),
				initialAgility
			),
			fortune: inventory1.reduce(
				(acc, item) => (acc += item?.fortune ?? 0),
				initialFortune
			),
			massDamage: inventory1.reduce(
				(acc, item) => (acc += item?.massDamage ?? 0),
				initialMassDamage
			),
		}
		const secondStats = {
			damage: inventory2.reduce(
				(acc, item) => (acc += item?.damage ?? 0),
				initialDamage
			),
			shield: inventory2.reduce(
				(acc, item) => (acc += item?.shield ?? 0),
				initialProtection
			),
			agility: inventory2.reduce(
				(acc, item) => (acc += item?.agility ?? 0),
				initialAgility
			),
			fortune: inventory2.reduce(
				(acc, item) => (acc += item?.fortune ?? 0),
				initialFortune
			),
			massDamage: inventory2.reduce(
				(acc, item) => (acc += item?.massDamage ?? 0),
				initialMassDamage
			),
		}
		return { firstStats, secondStats }
	}

	const forcePickItems = async (number: number) => {
		let pickedItems = 0;
		while (pickedItems < number) {
			pickedItems += (await pickItem(getRandomItemId('basic'))) ? 1 : 0
		}
	}

	const pickItems = async (itemsId: number[]) => {
		for (const id of itemsId) {
			await pickItem(id)
		}
	}

	const pickItem = async (itemId: number) => {
		const item = getItemById(itemId)
		let newInventory = [...inventory]
		if (
			item.type === 'weapon' &&
			findByProperty(inventory, 'type', 'weapon').length >= 2
		) {
			const index = newInventory.findIndex(item => item.type === 'weapon')

			newInventory = removeByIndex(newInventory, index)
		}

		const availableTypes = ['hat', 'pants', 'chest', 'shield', 'boots']
		availableTypes.map(typeOfWear => {
			if (
				item.type === typeOfWear &&
				findByProperty(inventory, 'type', typeOfWear).length >= 1
			) {
				const index = newInventory.findIndex(item => item.type === typeOfWear)
				newInventory = removeByIndex(newInventory, index)
			}
		})
		newInventory.push(item)
		const {firstStats, secondStats} = getStatsDifferences(inventory, newInventory)
		const confirmation = await callConfirm(
			<div>
				<p>
					Вы хотите подобрать <span style={{color: item.rare === 'basic' ? '#aaa' : item.rare === 'rare' ? '#0f0' : item.rare === 'epic' ? 'violet' : 'gold'}} >{item.name}</span>
					?
				</p>
				<div>
					{firstStats.damage !==
						secondStats.damage && (
						<div>
							Урон: {firstStats.damage} {'->'}{' '}
							<span
								style={{
									color:
										firstStats.damage <
										secondStats.damage
											? '#0f0'
											: '#f00',
								}}
							>
								{secondStats.damage}
							</span>
						</div>
					)}
					{firstStats.shield !==
						secondStats.shield && (
						<div>
							Защита: {firstStats.shield} {'->'}{' '}
							<span
								style={{
									color:
										firstStats.shield <
										secondStats.shield
											? '#0f0'
											: '#f00',
								}}
							>
								{secondStats.shield}
							</span>
						</div>
					)}
					{firstStats.agility !==
						secondStats.agility && (
						<div>
							Ловкость: {firstStats.agility}% {'->'}{' '}
							<span
								style={{
									color:
										firstStats.agility <
										secondStats.agility
											? '#0f0'
											: '#f00',
								}}
							>
								{secondStats.agility}%
							</span>
						</div>
					)}
					{firstStats.fortune !==
						secondStats.fortune && (
						<div>
							Удача: {firstStats.fortune}% {'->'}{' '}
							<span
								style={{
									color:
										firstStats.fortune <
										secondStats.fortune
											? '#0f0'
											: '#f00',
								}}
							>
								{secondStats.fortune}%
							</span>
						</div>
					)}
					{firstStats.massDamage !==
						secondStats.massDamage && (
						<div>
							Масс. урон: {firstStats.massDamage}% {'->'}{' '}
							<span
								style={{
									color:
										firstStats.massDamage <
										secondStats.massDamage
											? '#0f0'
											: '#f00',
								}}
							>
								{secondStats.massDamage}%
							</span>
						</div>
					)}
				</div>
			</div>
		)
		if (confirmation) setInventory(prev => newInventory)
		return confirmation
	}

	return [
		gameState,
		startGame,
		makeChoice,
		makeBattleChoice,
		battleState,
		ConfirmWindow,
		AlertWindow,
	]
}
