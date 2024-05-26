import React from 'react';

interface Die {
  holdDieHandler: void;
  isHeld: boolean;
  value: number;
}

const Die: React.FC = ({ holdDieHandler, isHeld, value }) => {
  const hasHeldClass = isHeld ? 'held' : '';

  return (
    <button className={hasHeldClass} onClick={holdDieHandler}>
      {value}
    </button>
  );
};
export default Die;
