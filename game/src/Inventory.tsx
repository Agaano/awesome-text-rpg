import React from 'react';

interface InventoryProps {
  inventory: any[]; // Типизируйте инвентарь по вашей логике
}

const Inventory: React.FC<InventoryProps> = ({ inventory }) => {
  return (
    <div>
      <strong>Инвентарь:</strong> {inventory.map((item, index) => (
        <span key={index}>{item.name}, </span>
      ))}
    </div>
  );
};

export default Inventory;
