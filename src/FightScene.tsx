import React from "react";
import styles from "./Scene.styles";
import {
  EnemyType,
  SceneType,
  BattleOptionType,
  OptionType,
  NpcOptionType,
  ActionOptionType,
} from "./types/types";

interface SceneProps {
  scene: SceneType;
  makeChoice: (
    option: BattleOptionType | OptionType | ActionOptionType | NpcOptionType,
    index: number
  ) => void;
  battleState: EnemyType[] | undefined;
}

const Scene: React.FC<SceneProps> = ({
  scene,
  makeChoice,
  battleState,
}: {
  scene: SceneType;
  makeChoice: (
    option: BattleOptionType | OptionType | ActionOptionType | NpcOptionType,
    index: number
  ) => void;
  battleState: EnemyType[] | undefined;
}) => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>{scene.text}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {battleState &&
          battleState.map((enemy, index) => {
            return (
              <div
                key={index}
                style={styles.enemyInfoContainer as React.CSSProperties}
              >
                <p>{enemy.name} HP:</p>
                <div style={styles.enemyHealthBar}>
                  <div
                    style={{
                      width: `${(enemy.hp / enemy.maxHp) * 100}%`,
                      ...styles.enemyHealthBarInner,
                    }}
                  >
                    {enemy.hp}
                  </div>
                </div>
                <img
                  src={`./${enemy.img}`}
                  style={{ width: "180px", height: "180px" }}
                ></img>
                <p>DAMAGE: {enemy.damage}</p>
                <p>POWER: {enemy.power}</p>
              </div>
            );
          })}
      </div>
      <div style={styles.optionsContainer as React.CSSProperties}>
        {scene?.options.map(
          (
            option:
              | BattleOptionType
              | OptionType
              | ActionOptionType
              | NpcOptionType,
            index: number
          ) => (
            <button
              key={index}
              style={styles.optionButton}
              onClick={() => makeChoice(option, index)}
            >
              {option.choice}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Scene;
