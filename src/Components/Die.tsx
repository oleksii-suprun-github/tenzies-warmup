import React, { MouseEventHandler } from 'react';

export interface DieProps {
  holdDieHandler: MouseEventHandler<HTMLButtonElement>;
  isHeld: boolean;
  value: number;
}

const Die: React.FC<DieProps> = ({ holdDieHandler, isHeld, value: pipsAmount }) => {
  const hasHeldClass = isHeld ? 'held' : '';
  let diePips: React.JSX.Element[] = [];
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
