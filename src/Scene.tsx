import React from "react";
import { SceneType } from "./types/types";
import styles from "./Scene.styles";

interface SceneProps {
  scene: SceneType;
  makeChoice: (option: any, index: number) => void;
}

const Scene: React.FC<SceneProps> = ({
  scene,
  makeChoice,
}: {
  scene: SceneType;
  makeChoice: (option: number, index: number) => void;
}) => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>{scene.text}</p>
      <div style={styles.optionsContainer as React.CSSProperties}>
        {scene?.options.map((option: any, index: number) => (
          <button
            key={index}
            style={styles.optionButton}
            onClick={() => makeChoice(option, index)}
          >
            {option.choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Scene;
