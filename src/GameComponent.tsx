import React, {useEffect} from 'react';
import { useGameLogic } from './gameLogic';
import FightScene from './FightScene'
import {useModalAlert} from './hooks/useModalAlert';
import character from './assets/character.png'

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
      <ConfirmWindow/>
      <AlertWindow/>
      <ModalAlertWindow/>
    </div>
    <div style={gameComponentStyles.gameInfo as React.CSSProperties}>
      <p>Здоровье:</p>
      <div style={gameComponentStyles.healthBar}>
        <div style={{ width: `${gameState.health}%`, ...gameComponentStyles.healthBarInner }}>{gameState.health}</div>
      </div>
      <div className = 'game-stats'>
        <div>
          <p onClick={() => {call('Урон наносимый персонажем по врагу')}}>Урон: {gameState.damage}</p> 
          <p onClick={() => {call('Шанс получить предмет после победы над противником')}}>Удача: {gameState.fortune}%</p>
        </div>
          <img src = {character}/>
        
        <div>
          <p onClick={() => {call('Процент блокируемого урона')}}>Защита: {gameState.protection}</p> 
          <p onClick={() => {call('Шанс увернуться от атаки противника')}}>Ловкость: {gameState.agility}%</p>
        </div>
      </div>
      <div className='inventory'>
          <p>Инвентарь: {gameState.inventory.reduce((acc, item) => acc + item.name + ',', '')}</p>
      </div>
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
