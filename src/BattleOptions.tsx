import React from 'react';

interface BattleOptionsProps {
  handleBattleAction: (action: string) => void;
}

const BattleOptions: React.FC<BattleOptionsProps> = ({ handleBattleAction }) => {
  return (
    <div>
      <button onClick={() => handleBattleAction('attack')}>Атаковать</button>
      <button onClick={() => handleBattleAction('heal')}>Использовать зелье</button>
    </div>
  );
};

export default BattleOptions;
