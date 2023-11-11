import { useState } from 'react';
import scenes from './prefabs/scenes';
import { useModalAlert, useModalConfirm } from './hooks/useModalAlert';

export interface GameStateType {
  currentScene: SceneType;
  inventory: any[];
  health: number;
  damage: number;
  protection: number;
  agility: number;
  fortune: number
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
  shield?: number,
  agility?: number,
  fortune?: number,
  type: 'weapon' | 'potion' | 'special' | 'hat' | 'chest' | 'shield' | 'pants' | 'boots'
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

  type set = {
    set: number[],
    damage?: number,
    healing?: number, 
    special?: string,
    shield?: number,
    agility?: number,
    fortune?: number,
  }
  
  export const sets: set[] = [
    {
      set: [1,2,3,4,5],
      damage: 5,
    },
    {
      set: [6,7,8,9,10],
      
    }
  ]

  export const npcs = [
    {
      name: 'Торговец',
      description: 'Приветствую, путник! У меня есть великолепные товары. Что тебе нужно?',
    },
  ];

  const initialAgility = 25;
  const initialDamage = 5;
  const initialProtection = 0;
  const initialHealth = 100;
  const initialFortune = 25;


export function useGameLogic(): [GameStateType, () => void, (option: any) => void, (option: any) => void, EnemyType | undefined, any, any] {
  const [currentScene, setCurrentScene] = useState<SceneType>(scenes[0]);
  const [previousScene, setPreviousScene] = useState<number>(0);
  const [inventory, setInventory] = useState<ItemType[]>([]);
  const [health, setHealth] = useState<number>(initialHealth);
  const [battleState, setBattleState] = useState<undefined | EnemyType>();
  const [ConfirmWindow, callConfirm] = useModalConfirm()
  const [AlertWindow, callAlert] = useModalAlert()
  const agility = inventory.reduce((acc,item) => acc += item?.agility ?? 0, initialAgility);
  const damage = inventory.reduce((acc, items) => acc += items?.damage ?? 0, initialDamage)
  const protection = inventory.reduce((acc, item) => acc += item?.shield ?? 0, initialProtection);
  const fortune = inventory.reduce((acc,item) => acc += item?.fortune ?? 0, initialFortune)

  const startGame = (): void => {
    setCurrentScene(scenes[0]);
    setInventory([]);
    setHealth(100);
    setBattleState(undefined);
    setPreviousScene(0);
  };

  const gameState:GameStateType = {
    currentScene,
    inventory,
    health,
    damage,
    protection, 
    agility,
    fortune
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
    setBattleState(undefined);
    goToScene(currentScene.nextScene);
  }
  
  const healHp = (hp: number) => {
    setHealth(prev => prev += hp);
  }

  const biteHp = (hp: number) => {
    const protectionCoff = 1 - (protection / 100);
    setHealth(prev => {
      if (prev - (hp * protectionCoff) <= 0) {
        callAlert('Вы проиграли!!!! В следующий раз будьте внимательнее!!!')
        startGame()
      }
      return prev -= (hp * protectionCoff)
    })
  }

  const makeBattleChoice = (option: BattleOptionType): void => {
    if (currentScene.type !== 'battle' || !battleState) return;
    if (option.type === 'attack') {
      setBattleState(prev => {
        if (!prev) return
        const curr = {...prev, hp: prev.hp - damage} 
        if (prev.hp - damage <= 0) {
          if (Math.random() > 0.5) pickItem(Math.floor(Math.random() * items.length) + 1)
          leaveTheBattle();
          return
        }
        return curr
      })
      biteHp(Math.random() < (agility / 100) ? 0 : battleState.damage)
    } else if (option.type === 'healing') {
      const heal = inventory.reduce((acc, item) => acc += item?.healing ?? 0, 0 )
      setInventory(prev => {
        const index = prev.findIndex((item) => item.healing)
        return removeByIndex(prev, index);
      })
      if (heal <= 0 ) return
      healHp(heal)
    } else if (option.type === 'leave') {
      callConfirm('Вы уверены что хотите сбежать?')?.then((value) => {
        if (value) {
          biteHp(battleState.damage / 2);
          leaveTheBattle();
        }
      })
    }
  }

  function removeByIndex(array: Array<any>, index: number) {
    if (index < 0 || index >= array.length) {
      return array;
    }
  
    const newArray = new Array(array.length - 1);
    for (let i = 0; i < index; i++) {
      newArray[i] = array[i];
    }
    for (let i = index + 1; i < array.length; i++) {
      newArray[i - 1] = array[i];
    }
  
    return newArray;
  }

  function findByProperty(array: Array<any>, property: string, value: any) {
    const results = [];
    for (const object of array) {
      if (object[property] === value) {
        results.push(object);
      }
    }
    return results;
  }
  
  const getItemById = (itemId: number) => {
    const item = items.find((item) => item.id === itemId) ?? items[0];
    if (!item) return items[0];
    return item
  }

  const pickItem = async (itemId: number) => {
    const item = getItemById(itemId)
    if (!(await callConfirm(`Вы хотите подобрать ${item.name}?
Помните, что предметы одного типа заменяются.`))) return  
    if (item.type === 'weapon' && findByProperty(inventory, 'type', 'weapon').length >= 2) {
        setInventory(prev => {
          const index = prev.findIndex((item) => item.type === 'weapon');
          return removeByIndex(prev, index);
        })
    }

    const availableTypes = ['hat', 'pants', 'chest', 'shield', 'boots'];
    availableTypes.map((typeOfWear) => {
      if (item.type === typeOfWear && findByProperty(inventory, 'type', typeOfWear).length >= 1) {
          setInventory(prev => {
          const index = prev.findIndex((item) => item.type === typeOfWear);
          return removeByIndex(prev, index);
        })
      }
    })
    setInventory(prev => [...prev, item])
  }

  return [gameState,startGame, makeChoice, makeBattleChoice, battleState, ConfirmWindow, AlertWindow];
}