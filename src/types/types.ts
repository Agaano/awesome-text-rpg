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


export type BattleOptionType = {
	choice: string,
  type: 'attack' | 'healing' | 'shield' | 'leave',
}

export type BattleType = {
	enemiesId: number[],
	buffs?: string[],
}


export interface GameStateType {
  currentScene: SceneType;
  inventory: any[];
  health: number;
  damage: number;
  protection: number;
  agility: number;
  fortune: number;
  massDamage: number;
}


export type EnemyType = {
  id: number,
  name: string,
  damage: number,
  hp: number,
  maxHp: number,
  range: 'melee' | 'ranged',
  img: string
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
  massDamage?: number,
  rare: 'basic' | 'rare' | 'epic' | 'legendary'
  type: 'weapon' | 'potion' | 'special' | 'hat' | 'chest' | 'shield' | 'pants' | 'boots'
}
