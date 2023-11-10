import { useState } from 'react';
import scenes from './prefabs/scenes';

export interface GameState {
  currentScene: SceneType;
  inventory: any[];
  health: number;
}

export type OptionType = {
  choice: string,
  nextScene: {id: number, type: 'battle' | 'npc' | 'scene'}, 
}

export type SceneType = {
  id: number,
  text: string,
  options: OptionType[] | BattleOptionType[],
  type: 'battle' | 'npc' | 'scene',
  battle?: BattleType,
  nextScene?: number,
}

export type BattleType = {
  enemiesId: number[],
  buffs?: string[],
}

export type BattleOptionType = {
  choice: string,
  type: 'attack' | 'healing' | 'shield' | 'leave',
}
  
export type EnemyType = {
  id: number,
  name: string,
  damage: number,
  hp: number,
  maxHp: number,
}
export type ItemType = {
  id: number,
  name: string,
  damage?: number,
  healing?: number, 
  special?: string,
}


const enemies: EnemyType[] = [
    { id: 1, name: 'Скелет', damage: 10, hp: 10, maxHp: 10 },
    { id: 2, name: 'Зомби', damage: 5, hp: 20, maxHp: 20 },
    { id: 3, name: 'Скелет-лучник', damage: 20, hp: 10, maxHp: 20 },
    { id: 4, name: 'Варвар', damage: 20, hp: 20, maxHp: 20 },
    { id: 5, name: 'Водный элементаль', damage: 15, hp: 15, maxHp: 15 },
    { id: 6, name: 'Злобный маг', damage: 25, hp: 15, maxHp: 15 },
]

  export const complexQuests = [
    {
      text: 'Вы встречаете таинственного незнакомца. Как вы поступите?',
      options: [
        { choice: 'Поприветствовать и спросить, кто он', nextScene: 10 },
        { choice: 'Осторожно приготовиться к бою', nextScene: 11 },
      ],
    },
  ];
  
  export const items = [
    { id: 1, name: 'Меч', damage: 20 },
    { id: 2, name: 'Зелье здоровья', healing: 30 },
    { id: 3, name: 'Магический артефакт', special: 'Призывает дракона' },
  ];
  
  export const npcs = [
    {
      name: 'Торговец',
      description: 'Приветствую, путник! У меня есть великолепные товары. Что тебе нужно?',
    },
  ];


export function useGameLogic(): [GameState, () => void, (option: any) => void, (option: any) => void, EnemyType | undefined] {
  const [currentScene, setCurrentScene] = useState<SceneType>(scenes[0]);
  const [previousScene, setPreviousScene] = useState<number>(0);
  const [inventory, setInventory] = useState<ItemType[]>([]);
  const [health, setHealth] = useState<number>(100);
  const [battleState, setBattleState] = useState<undefined | EnemyType>();

  const startGame = (): void => {
    setCurrentScene(scenes[0]);
    setInventory([]);
    setHealth(100);
  };

  const gameState:GameState = {
    currentScene,
    inventory,
    health,
  };

  const goToScene = (sceneIndex: number) => {
    const scene = scenes.find((scene) => scene.id === sceneIndex) ?? scenes[0]
    if (scene.type === 'battle') 
      startBattle(scene)
    setCurrentScene(scene)
  }
  const startBattle = (scene: SceneType) => {
    setPreviousScene(currentScene.id);
    setBattleState(getEnemyById(scene.battle?.enemiesId[0]))
  }

  const getEnemyById = (id: number | undefined) => {
    if (!id) return;
    const enemy = enemies.find((enemy) => enemy.id === id) ?? enemies[0];
    return enemy;
  }

  const makeChoice = (option: OptionType): void => {
    goToScene(option.nextScene.id)
  };

  const leaveTheBattle = () => {
    if (!currentScene.nextScene || !battleState) return
    if (Math.random() > 0.5) 
      pickItem(Math.floor(Math.random() * items.length))
    setBattleState(undefined);
    goToScene(currentScene.nextScene);
  }

  const biteHp = (hp: number) => {
    setHealth(prev => prev += hp)
    if (health + hp <= 0) {
      startGame()
    }
  }

  const makeBattleChoice = (option: BattleOptionType): void => {
    if (currentScene.type !== 'battle' || !battleState) return;
    if (option.type === 'attack') {
      setBattleState(prev => {
        if (!prev) return
        const curr = {...prev, hp: prev.hp - 10} 
        if (battleState.hp <= 0) {
          leaveTheBattle();
          return
        }
        return curr 
      })
      biteHp(Math.random() > 0.5 ? 0 : -battleState.damage)
    } else if (option.type === 'healing') {
    } else if (option.type === 'shield') {
      
    } else if (option.type === 'leave') {
      const is = confirm('Вы уверены что хотите сбежать?')
      if (is) {
        biteHp(-(battleState.damage / 2))
        alert('Вы проиграли!!!! В следующий раз будьте внимательнее!!!')
        leaveTheBattle();
      }
    }
  }
  
  const getItemById = (itemId: number) => {
    const item = items.find((item) => item.id === itemId) ?? items[0];
    if (!item) return items[0];
    return item
  }

  const pickItem = (itemId: number) => {
    setInventory(prev => [...prev, getItemById(itemId)])
  }

  return [gameState,startGame, makeChoice, makeBattleChoice, battleState];
}