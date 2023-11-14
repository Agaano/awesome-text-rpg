import React, { useState, useMemo, useEffect } from 'react'
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
import enemies from './prefabs/enimes'

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
	const agility = useMemo(() => {
		const agility = inventory.reduce(
			(acc, item) => (acc += item?.agility ?? 0),
			initialAgility
		)
		return agility > 100 ? 100 : agility;
	}, [inventory])
	const damage = useMemo(() => inventory.reduce(
		(acc, items) => (acc += items?.damage ?? 0),
		initialDamage
	), [inventory])
	const protection = useMemo(() => inventory.reduce(
		(acc, item) => (acc += item?.shield ?? 0),
		initialProtection
	),[inventory])
	const fortune = useMemo(() => inventory.reduce(
		(acc, item) => (acc += item?.fortune ?? 0),
		initialFortune
	),[inventory])
	const massDamage = useMemo(() => inventory.reduce(
		(acc, item) => (acc += item?.massDamage ?? 0),
		initialMassDamage
	), [inventory])

	// useEffect(() => {
	// 	console.log(inventory)
	// }, [inventory])

	const startGame = () => {
		console.log('startGame called')
		setCurrentScene(scenes[0])
		setInventory([])
		setHealth(100)
		setBattleState(undefined)
		setPreviousScene(0)
		pickItem([getRandomItemId('epic'),getRandomItemId('epic'),getRandomItemId('epic')], [])
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
			if (prev <= 0) return initialHealth
			if (prev - hp * protectionCoff <= 0) {
				callAlert('Вы проиграли!!!! В следующий раз будьте внимательнее!!!')
				startGame()
			}
			return (prev -= hp * protectionCoff)
		})
	}

	const victoryInBattle = (victoried: boolean) => {
		if (!victoried) console.log('ПОБЕДАА!!!')
		if (Math.random() <= Math.abs(fortune) / 100 && !!battleState && !!currentScene.nextScene && !victoried) pickItem([getRandomItemId()])
		leaveTheBattle()
	}

	const makeBattleChoice = (option: BattleOptionType): void => {
		if (currentScene.type !== 'battle' || !battleState) return
		if (option.type === 'attack') {
			let victoried = false;
			if (!battleState?.[0] || !battleState || health <= 0) return;
			setBattleState(prev => {
				let currEnemies = prev?.map((enemy, index) => ({...enemy, hp: index === 0 ? enemy.hp - damage : enemy.hp - (damage * (massDamage / 100)) }))
				const newEnemies = [];
				for (let enemy of currEnemies) {
					if (enemy.hp > 0) newEnemies.push(enemy)
				}
				if (newEnemies.length === 0) {
					victoryInBattle(victoried)
					victoried = true;
					return
				}
				let totalEnemiesDamage = newEnemies?.reduce((acc, enemy, index) => acc += Math.random() > (agility / 100) ? (index === 0 && enemy.range === 'melee' ? enemy.damage : enemy.range === 'ranged' ? enemy.damage : 0) : 0, 0) ?? 0;
				biteHp(totalEnemiesDamage);
				return newEnemies
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
			// pickedItems += (await pickItem(getRandomItemId('basic'))) ? 1 : 0
		}
	}

	const pickItems = async (itemsId: number[]) => {
		// const promises = itemsId.map((id) => pickItem(id));
	}

	function compareArrays(array1, array2) {
		// Проверяем, что массивы имеют одинаковый размер
		if (array1.length !== array2.length) {
			return false;
		}
	
		// Сравниваем элементы массивов по одному
		for (let i = 0; i < array1.length; i++) {
			if (array1[i] !== array2[i]) {
				return false;
			}
		}
	
		// Массивы равны
		return true;
	}

	const pickItem = async (itemId: number[], initialInventory?: ItemType[]) => {
		console.log(`items: ${itemId}, initialInventory: ${initialInventory?.map((item) => item.name) ?? inventory.map((item) => item.name)}`)
		let additionalInventory: ItemType[] = initialInventory;
		for (let i of itemId) {
			additionalInventory = await confirmPickItem(i, additionalInventory)
		}
		setInventory(additionalInventory)
	}

	const confirmPickItem = async (itemId: number, additionalInventory?: ItemType[]): Promise<ItemType[]> => {
			const item = getItemById(itemId)
			console.log(`Trying to add ${item.name}`)
			let newInventory
			let tempInventory;
			if (!additionalInventory) tempInventory = [...inventory];
			else tempInventory = [...additionalInventory]
			newInventory = [...tempInventory]
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
			const {firstStats, secondStats} = getStatsDifferences(tempInventory, newInventory)
			const finalInventory:ItemType[] = [...newInventory];
			return callConfirm(
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
			).then((confirmation) => {
				console.log(confirmation ? `${item.name} has been added` : `${item.name} has not been added `)
				if (!confirmation) return tempInventory
				return finalInventory
			}).catch((error) => {
				console.log(`${item.name} has not been added `)
				return tempInventory
			})
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