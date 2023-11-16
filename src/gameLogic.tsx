import React, { useState, useMemo, useEffect } from "react";
import { useModalAlert, useModalConfirm } from "./hooks/useModalAlert";
import { items, getRandomItemId } from "./prefabs/items";
import scenes from "./prefabs/scenes";
import { removeByIndex, findByProperty, isSet } from "./lib/lib";
import ChoosingItem from "./prefabs/ChoosingItem";
import sets from "./prefabs/sets";
import {
  BattleOptionType,
  EnemyType,
  GameStateType,
  ItemType,
  OptionType,
  SceneType,
  ActionOptionType,
  NpcOptionType,
  SetType,
  NpcType,
} from "./types/types";
import enemies from "./prefabs/enimes";
import npcs from "./prefabs/npc";

const initialAgility = 25;
const initialDamage = 5;
const initialProtection = 10;
const initialHealth = 100;
const initialFortune = 25;
const initialMassDamage = 0;

export function useGameLogic(): [
  GameStateType,
  () => void,
  (option: any, index: number) => void,
  (option: any) => void,
  EnemyType[] | undefined,
  any,
  any
] {
  const [currentScene, setCurrentScene] = useState<SceneType>(scenes[0]);
  const [previousScene, setPreviousScene] = useState<number>(0);
  const [inventory, setInventory] = useState<ItemType[]>([]);
  const [health, setHealth] = useState<number>(initialHealth);
  const [battleState, setBattleState] = useState<undefined | EnemyType[]>();
  const [npcState, setNpcState] = useState<NpcType | undefined>();
  const [ConfirmWindow, callConfirm] = useModalConfirm();
  const [AlertWindow, callAlert] = useModalAlert();

  const { agility, damage, protection, fortune, massDamage, activeSets } =
    useMemo(() => {
      const obj = {};
      const initStat = {
        agility: initialAgility,
        damage: initialDamage,
        shield: initialProtection,
        protection: 0,
        fortune: initialFortune,
        massDamage: initialMassDamage,
      };
      const idS = inventory.map((item) => item.id);
      const activeSets: SetType[] = [];
      sets.map((set) => {
        if (isSet(idS, set.set)) activeSets.push(set);
      });
      const setStats = {};
      activeSets.map((set) => {
        Object.keys(set).map((key) => {
          if (key !== "name" && key !== "set")
            setStats[key] = (setStats[key] ?? 0) + (set[key] ?? 0);
        });
      });
      Object.entries(initStat).map(([key, value]) => {
        obj[key] = inventory.reduce(
          (acc, item) => (acc += item?.[key] ?? 0),
          value + (setStats[key] ?? 0)
        );
      });
      obj["activeSets"] = activeSets;
      obj["protection"] = obj["shield"] ?? 0 + obj["protection"] ?? 0;
      return obj as {
        agility: number;
        damage: number;
        protection: number;
        fortune: number;
        massDamage: number;
        activeSets: SetType[];
      };
    }, [inventory]);

  const startGame = () => {
    setCurrentScene(scenes[0]);
    setInventory([]);
    setHealth(100);
    setBattleState(undefined);
    setPreviousScene(0);
    pickItem([208, 224, 240, 256, 272, 288, 304, 320], []);
  };

  const gameState: GameStateType = useMemo(
    () => ({
      currentScene,
      inventory,
      health,
      damage,
      protection,
      agility,
      fortune,
      massDamage,
      activeSets,
      gold: 0,
    }),
    [
      currentScene,
      inventory,
      health,
      damage,
      protection,
      agility,
      fortune,
      massDamage,
    ]
  );

  const goToScene = (sceneIndex: number) => {
    const scene = scenes.find((scene) => scene.id === sceneIndex) ?? scenes[0];
    if (scene.type === "battle") startBattle(scene);
    if (scene.type === "npc") startNpc(scene);
    setCurrentScene(scene);
  };

  const startNpc = (scene: SceneType) => {
    if (!scene.npc) return;
    setNpcState(getNpc(scene.npc));
  };

  const startBattle = (scene: SceneType) => {
    setPreviousScene(currentScene.id);
    const enemiesArr = scene.battle?.enemiesId.map((enemyId) => {
      return getEnemyById(enemyId) ?? enemies[0];
    });
    setBattleState(enemiesArr);
  };

  const getEnemyById = (id: number) => {
    const enemy = enemies.find((enemy) => enemy.id === id) ?? enemies[0];
    return enemy;
  };

  const makeChoice = (
    option: OptionType | BattleOptionType | ActionOptionType | NpcOptionType,
    index: number
  ): void => {
    const defaultOption = option as OptionType;
    const battleOption = option as BattleOptionType;
    const actionOption = option as ActionOptionType;
    const npcOption = option as NpcOptionType;
    if (!!defaultOption.nextScene) {
      goToScene(defaultOption.nextScene.id);
    } else if (!!battleOption.type) {
      makeBattleChoice(battleOption);
    } else if (!!actionOption.action) {
      makeActionChoice(actionOption, index);
    } else if (!!npcOption.npcAction) {
      makeNpcChoice(npcOption);
    }
  };

  const makeActionChoice = (option: ActionOptionType, index: number) => {
    callAlert(option.action.message);
    const { damage, healing, treasure } = option.action.get;
    if (!!damage) biteHp(damage);
    if (!!healing) healHp(healing);
    if (!!treasure && treasure.length > 0) pickItem(treasure, inventory);
    removeOption(index);
  };

  const removeOption = (index: number) => {
    setCurrentScene((prev) => {
      const options = [...prev.options];
      const newOptions = removeByIndex(options, index);
      return { ...prev, options: newOptions };
    });
  };

  const leaveTheBattle = () => {
    if (!currentScene.nextScene || !battleState) return;
    setBattleState(undefined);
    goToScene(currentScene.nextScene);
  };

  const killTheEnemy = (arr: EnemyType[], id: number) => {
    if (!arr?.[id]) return arr;
    return removeByIndex(arr, id);
  };

  const healHp = (hp: number) => {
    setHealth((prev) => (prev += hp));
  };

  const biteHp = (hp: number) => {
    const protectionCoff = 1 - protection / 100;
    setHealth((prev) => {
      if (prev <= 0) return initialHealth;
      if (prev - hp * protectionCoff <= 0) {
        callAlert("Вы проиграли!!!! В следующий раз будьте внимательнее!!!");
        startGame();
      }
      return (prev -= hp * protectionCoff);
    });
  };

  const getNpc = (id: number) => {
    return npcs.find((npc) => npc.id === id);
  };

  const makeNpcChoice = (option: NpcOptionType): void => {
    if (currentScene.type !== "npc" || !npcState) return;
    const products = npcState.inventory;
    const funcs = {
      sell: () => {
        callAlert(
          <>
            <ul>
              {!!products &&
                products.length > 0 &&
                products.map((product) => {
                  return (
                    <li>
                      {getItemById(product.id).name}:{product.cost}
                    </li>
                  );
                })}
            </ul>
          </>
        );
      },
      buy: () => {},
      leave: () => {},
    };
    funcs[option.npcAction]();
  };

  const victoryInBattle = (victoried: boolean) => {
    if (
      Math.random() <= Math.abs(fortune) / 100 &&
      !!battleState &&
      !!currentScene.nextScene &&
      !victoried
    )
      pickItem([getRandomItemId()], inventory);
    leaveTheBattle();
  };

  const makeBattleChoice = (option: BattleOptionType): void => {
    if (currentScene.type !== "battle" || !battleState) return;
    if (option.type === "attack") {
      let victoried = false;
      if (!battleState?.[0] || !battleState || health <= 0) return;
      setBattleState((prev) => {
        let currEnemies = prev?.map((enemy, index) => ({
          ...enemy,
          hp:
            index === 0
              ? enemy.hp - damage
              : enemy.hp - damage * (massDamage / 100),
        }));
        const newEnemies = [];
        for (let enemy of currEnemies) {
          if (enemy.hp > 0) newEnemies.push(enemy);
        }
        if (newEnemies.length === 0) {
          victoryInBattle(victoried);
          victoried = true;
          return;
        }
        let totalEnemiesDamage =
          newEnemies?.reduce(
            (acc, enemy, index) =>
              (acc +=
                Math.random() > agility / 100
                  ? index === 0 && enemy.range === "melee"
                    ? enemy.damage
                    : enemy.range === "ranged"
                    ? enemy.damage
                    : 0
                  : 0),
            0
          ) ?? 0;
        biteHp(totalEnemiesDamage);
        return newEnemies;
      });
    } else if (option.type === "healing") {
      const heal = inventory.reduce(
        (acc, item) => (acc += item?.healing ?? 0),
        0
      );
      setInventory((prev) => {
        const index = prev.findIndex((item) => item.healing);
        return removeByIndex(prev, index);
      });
      if (heal <= 0) return;
      healHp(heal);
    } else if (option.type === "leave") {
      callConfirm("Вы уверены что хотите сбежать?")?.then((value) => {
        if (value) {
          biteHp(
            battleState.reduce((acc, enemy) => (acc += enemy.damage), 0) / 2
          );
          leaveTheBattle();
        }
      });
    }
  };

  function findDeadEnemies(array: Array<EnemyType>) {
    const results = [];
    let i = 0;
    for (const object of array) {
      if (object.hp <= 0) {
        results.push(i);
      }
      i++;
    }
    return results;
  }

  const getItemById = (itemId: number) => {
    const item = items.find((item) => item.id === itemId) ?? items[0];
    if (!item) return items[0];
    return item;
  };

  const getStatsDifferences = (
    inventory1: ItemType[],
    inventory2: ItemType[]
  ) => {
    const getStatsOfInventory = (inventory: ItemType[]) => {
      const newObj = {};
      const stats = ["damage", "shield", "agility", "fortune", "massDamage"];
      const statsInit = [
        initialDamage,
        initialProtection,
        initialAgility,
        initialFortune,
        initialMassDamage,
      ];
      stats.map((stat, index) => {
        newObj[stat] = inventory.reduce(
          (acc, item) => (acc += item?.[stat] ?? 0),
          statsInit[index]
        );
      });
      return newObj as {
        damage: number;
        shield: number;
        agility: number;
        fortune: number;
        massDamage: number;
      };
    };
    const firstStats = getStatsOfInventory(inventory1);
    const secondStats = getStatsOfInventory(inventory2);
    return { firstStats, secondStats };
  };

  const getCorrectInventory = (inventory: ItemType[]) => {
    const newInventory: ItemType[] = [];
    let weaponCount = 2;
    let equipmentCounts = { hat: 1, pants: 1, chest: 1, shield: 1, boots: 1 };
    [...inventory].reverse().map((item) => {
      if (item.type === "weapon") {
        if (weaponCount === 0) return;
        newInventory.push(item);
        weaponCount--;
        return;
      } else if (Object.keys(equipmentCounts).includes(item.type)) {
        Object.entries(equipmentCounts).map(([key, value]) => {
          if (item.type === key) {
            if (equipmentCounts[key] === 0) return;
            newInventory.push(item);
            equipmentCounts[key]--;
            return;
          }
        });
      } else newInventory.push(item);
    });
    return newInventory.reverse();
  };

  const pickItem = async (itemId: number[], initialInventory?: ItemType[]) => {
    let additionalInventory: ItemType[] = initialInventory;
    for (let i of itemId) {
      additionalInventory = await confirmPickItem(i, additionalInventory);
    }
    setInventory(additionalInventory);
  };

  const confirmPickItem = async (
    itemId: number,
    inventory: ItemType[]
  ): Promise<ItemType[]> => {
    const item = getItemById(itemId);
    let newInventory = [...inventory];
    newInventory.push(item);
    newInventory = getCorrectInventory(newInventory);
    const { firstStats, secondStats } = getStatsDifferences(
      inventory,
      newInventory
    );
    const finalInventory: ItemType[] = [...newInventory];
    return callConfirm(
      <ChoosingItem
        firstStats={firstStats}
        secondStats={secondStats}
        item={item}
      />
    )
      .then((confirmation) => {
        if (!confirmation) return inventory;
        return finalInventory;
      })
      .catch((error) => {
        return inventory;
      });
  };

  return [
    gameState,
    startGame,
    makeChoice,
    makeBattleChoice,
    battleState,
    ConfirmWindow,
    AlertWindow,
  ];
}
