import React, { useEffect } from "react";
import FightScene from "./FightScene";
import { useGameLogic } from "./gameLogic";
import { useModalAlert } from "./hooks/useModalAlert";

import gameComponentStyles from "./GameComponent.styles";
import Scene from "./Scene";

const GameComponent: React.FC = () => {
  const [
    gameState,
    startGame,
    makeChoice,
    makeBattleChoice,
    battleState,
    ConfirmWindow,
    AlertWindow,
  ] = useGameLogic();
  const [ModalAlertWindow, call] = useModalAlert();

  useEffect(() => {
    startGame();
  }, []);
  return (
    <div style={gameComponentStyles.container as React.CSSProperties}>
      <div style={gameComponentStyles.header}>
        <ConfirmWindow />
        <AlertWindow />
        <ModalAlertWindow />
      </div>
      <div style={gameComponentStyles.gameInfo as React.CSSProperties}>
        <p>Здоровье:</p>
        <div style={gameComponentStyles.healthBar}>
          <div
            style={{
              width: `${gameState.health}%`,
              ...gameComponentStyles.healthBarInner,
            }}
          >
            {gameState.health}
          </div>
        </div>
        <div className="game-stats">
          <div>
            <p
              onClick={() => {
                call("Урон наносимый персонажем по врагу");
              }}
            >
              Урон: {gameState.damage}
            </p>
            <p
              onClick={() => {
                call("Шанс получить предмет после победы над противником");
              }}
            >
              Удача: {gameState.fortune}%
            </p>
          </div>
          <img src={"./src/assets/character.png"} />

          <div>
            <p
              onClick={() => {
                call("Процент блокируемого урона");
              }}
            >
              Защита: {gameState.protection}
            </p>
            <p
              onClick={() => {
                call("Шанс увернуться от атаки противника");
              }}
            >
              Ловкость: {gameState.agility}%
            </p>
            <p>Масс.урон: {gameState.damage * (gameState.massDamage / 100)}</p>
          </div>
        </div>
        <div className="inventory">
          {gameState.inventory.length > 0 && (
            <p
              style={{
                cursor: "pointer",
                backgroundColor: "#4CAF50",
                width: "75%",
                paddingBlock: "10px",
                marginInline: "auto",
                borderRadius: "5px",
              }}
              onClick={() =>
                call(
                  <ul>
                    <h4>Инвентарь:</h4>
                    {gameState.inventory.map((item, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() =>
                            call(
                              <>
                                <p>Характеристики {item.name}</p>
                                <div>
                                  <p>Редкость: {item.rare}</p>
                                  <p>Тип: {item.type}</p>
                                  {item?.damage && <p>Урон: {item.damage}</p>}
                                  {item?.shield && <p>Защита: {item.shield}</p>}
                                  {item?.agility && (
                                    <p>Ловкость: {item.agility}%</p>
                                  )}
                                  {item?.fortune && (
                                    <p>Удача: {item.fortune}%</p>
                                  )}
                                  {item?.massDamage && (
                                    <p>Масс. урон: {item.massDamage}%</p>
                                  )}
                                </div>
                              </>
                            )
                          }
                          style={{
                            color:
                              item.rare === "basic"
                                ? "#aaa"
                                : item.rare === "rare"
                                ? "#0f0"
                                : item.rare === "epic"
                                ? "violet"
                                : "gold",
                            cursor: "pointer",
                          }}
                        >
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>
                )
              }
            >
              Инвентарь
            </p>
          )}
          {gameState.activeSets.length > 0 && (
            <p
              style={{
                cursor: "pointer",
                backgroundColor: "#4CAF50",
                width: "75%",
                paddingBlock: "10px",
                marginInline: "auto",
                borderRadius: "5px",
              }}
              onClick={() =>
                call(
                  <ul>
                    <h4>Активные сеты:</h4>
                    {gameState.activeSets.map((set, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() =>
                            call(
                              <>
                                <p>{set.name}</p>
                                <div>
                                  {set?.damage && <p>Урон: {set.damage}</p>}
                                  {set?.protection && (
                                    <p>Защита: {set?.protection}</p>
                                  )}
                                  {set?.agility && (
                                    <p>Ловкость: {set.agility}%</p>
                                  )}
                                  {set?.fortune && <p>Удача: {set.fortune}%</p>}
                                  {set?.massDamage && (
                                    <p>Масс. урон: {set.massDamage}%</p>
                                  )}
                                </div>
                              </>
                            )
                          }
                          style={{ cursor: "pointer" }}
                        >
                          {set.name}
                        </li>
                      );
                    })}
                  </ul>
                )
              }
            >
              Активные сеты
            </p>
          )}
        </div>
      </div>
      {gameState.currentScene.type === "scene" ? (
        <Scene scene={gameState.currentScene} makeChoice={makeChoice} />
      ) : (
        <FightScene
          scene={gameState.currentScene}
          makeChoice={makeChoice}
          battleState={battleState}
        />
      )}
    </div>
  );
};

export default GameComponent;
