import React, {useEffect} from 'react';
import { useGameLogic } from './gameLogic';
import FightScene from './FightScene'

import gameComponentStyles from './GameComponent.styles';
import Scene from './Scene';

const GameComponent: React.FC = () => {
  const [gameState, startGame, makeChoice, makeBattleChoice, battleState] = useGameLogic();

  useEffect(() => {
    startGame()
  }, [])
  return (
    <div style={gameComponentStyles.container as React.CSSProperties}>
    <div style={gameComponentStyles.header}>
      <h1>Игра</h1>
    </div>
    <div style={gameComponentStyles.gameInfo as React.CSSProperties}>
      <p>Здоровье:</p>
      <div style={gameComponentStyles.healthBar}>
        <div style={{ width: `${gameState.health}%`, ...gameComponentStyles.healthBarInner }}></div>
      </div>
      <p>Инвентарь: {gameState.inventory.reduce((acc, item) => acc + item.name + ',', '')}</p>
    </div>
      {
        gameState.currentScene.type === 'scene' ?
        <Scene scene={gameState.currentScene} makeChoice={makeChoice} />
        :
        <FightScene scene={gameState.currentScene} makeChoice={makeBattleChoice} battleState={battleState}/>
      }
    </div>
  );
};

export default GameComponent;
