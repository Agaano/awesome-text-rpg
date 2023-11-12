
import React from 'react';
import { SceneType,EnemyType } from './types/types';

import styles from './Scene.styles';

interface SceneProps {
  scene: SceneType;
  makeChoice: (option: any) => void;
	battleState: EnemyType | undefined,
}

const Scene: React.FC<SceneProps> = ({ scene, makeChoice, battleState }: { scene: SceneType, makeChoice: (option: number) => void, battleState: EnemyType | undefined }) => {
    return (
      <div style={styles.container}>
        <p style={styles.text}>{scene.text}</p>
        {battleState && (
          <div style={styles.enemyInfoContainer  as React.CSSProperties}>
            <p>{battleState.name} HP:</p>
            <div style={styles.enemyHealthBar}>
              <div style={{ width: `${(battleState.hp / battleState.maxHp) * 100}%`, ...styles.enemyHealthBarInner }}>{battleState.hp}</div>
            </div>
            <p>DAMAGE: {battleState.damage}</p>
          </div>
        )}
        <div style={styles.optionsContainer as React.CSSProperties}>
          {scene?.options.map((option: any, index: number) => (
            <button
              key={index}
              style={styles.optionButton}
              onClick={() => makeChoice(option)}
            >
              {option.choice}
            </button>
          ))}
        </div>
      </div>
    );
  };

export default Scene;