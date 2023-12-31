export type OptionType = {
  choice: string;
  nextScene: { id: number; type: "battle" | "npc" | "scene" };
};

export type ActionOptionType = {
  choice: string;
  action: {
    message: string;
    get: { healing?: number; damage?: number; treasure?: number[] };
  };
};

export type NpcOptionType = {
  choice: string;
  npcAction: "buy" | "sell" | "leave";
};

export type SceneType = {
  id: number;
  text: string;
  options:
    | Array<OptionType | ActionOptionType>
    | Array<BattleOptionType | ActionOptionType>
    | NpcOptionType[];
  type: "battle" | "npc" | "scene";
  battle?: BattleType;
  nextScene?: number;
  npc?: number;
};

export type BattleOptionType = {
  choice: string;
  type: "attack" | "healing" | "shield" | "leave";
};

export type BattleType = {
  enemiesId: number[];
  buffs?: string[];
};

export type NpcType = {
  id: number;
  name: string;
  inventory: ProductType[];
};

export type ProductType = {
  id: number;
  cost: number;
};

export type SetType = {
  name: string;
  set: number[];
  damage?: number;
  healing?: number;
  special?: string;
  protection?: number;
  agility?: number;
  fortune?: number;
  massDamage?: number;
};
export interface GameStateType {
  currentScene: SceneType;
  inventory: any[];
  health: number;
  damage: number;
  protection: number;
  agility: number;
  fortune: number;
  massDamage: number;
  activeSets: SetType[];
  gold: number;
}

export type EnemyType = {
  id: number;
  name: string;
  damage: number;
  hp: number;
  maxHp: number;
  range: "melee" | "ranged";
  img?: string;
  power: number;
};
export type ItemType = {
  id: number;
  name: string;
  damage?: number;
  healing?: number;
  special?: string;
  shield?: number;
  agility?: number;
  fortune?: number;
  massDamage?: number;
  rare: "basic" | "rare" | "epic" | "legendary";
  type:
    | "weapon"
    | "potion"
    | "special"
    | "hat"
    | "chest"
    | "shield"
    | "pants"
    | "boots";
};
