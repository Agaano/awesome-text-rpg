
import React from 'react';
import { SceneType } from './types/types';
import styles from './Scene.styles';

interface SceneProps {
  scene: SceneType;
  makeChoice: (option: any) => void;
}

const Scene: React.FC<SceneProps> = ({ scene, makeChoice } : {scene: SceneType, makeChoice: (option : number) => void}) => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>{scene.text}</p>
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