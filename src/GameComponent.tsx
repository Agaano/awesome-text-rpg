import React, {useEffect} from 'react';
import { useGameLogic } from './gameLogic';
import FightScene from './FightScene'
import {useModalAlert} from './hooks/useModalAlert';

import gameComponentStyles from './GameComponent.styles';
import Scene from './Scene';

const GameComponent: React.FC = () => {
  const [gameState, startGame, makeChoice, makeBattleChoice, battleState, ConfirmWindow, AlertWindow] = useGameLogic();
  const [ModalAlertWindow, call] = useModalAlert()

  useEffect(() => {
    startGame()
  }, [])
  return (
    <div style={gameComponentStyles.container as React.CSSProperties}>
    <div style={gameComponentStyles.header}> 
      <h1>Игра</h1>
      <ConfirmWindow/>
      <AlertWindow/>
      <ModalAlertWindow/>
    </div>
    <div style={gameComponentStyles.gameInfo as React.CSSProperties}>
      <p>Здоровье:</p>
      <div style={gameComponentStyles.healthBar}>
        <div style={{ width: `${gameState.health}%`, ...gameComponentStyles.healthBarInner }}>{gameState.health}</div>
      </div>
      <div style={gameComponentStyles.stats}>
        <p onClick={() => {call('Урон наносимый персонажем по врагу')}}>Урон: {gameState.damage}</p> 
        <p onClick={() => {call('Процент блокируемого урона')}}>Защита: {gameState.protection}</p> 
        <p onClick={() => {call('Шанс увернуться от атаки противника')}}>Ловкость: {gameState.agility}%</p>
        <p onClick={() => {call('Шанс получить предмет после победы над противником')}}>Удача: {gameState.fortune}%</p>
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
