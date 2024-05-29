import React from 'react';

interface Die {
  holdDieHandler: void;
  isHeld: boolean;
  value: number;
}

const Die: React.FC = ({ holdDieHandler, isHeld, value: pipsAmount }) => {
  const hasHeldClass = isHeld ? 'held' : '';
  let diePips: Element[] = [];
  for (let i = 1; i <= pipsAmount; i++) {
    diePips.push(<div key={i} className={`pip pips-${pipsAmount} pip-index-${i}`}></div>);
  }

  return (
    <button className={`die ${hasHeldClass}`} onClick={holdDieHandler}>
      {diePips}
    </button>
  );
};
export default Die;
