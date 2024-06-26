import React, { MouseEventHandler } from 'react';
import { getPipClasses } from 'utils';

export interface DieProps {
  holdDieHandler: MouseEventHandler<HTMLButtonElement>;
  isHeld: boolean;
  value: number;
}

const Die: React.FC<DieProps> = ({ holdDieHandler, isHeld, value: pipsAmount }) => {
  const hasHeldClass = isHeld ? 'bg-main-die-active' : '';
  let diePips: React.JSX.Element[] = [];
  for (let i = 1; i <= pipsAmount; i++) {
    diePips.push(
      <div
        key={i}
        className={`h-2.5 w-2.5 rounded-[50%] bg-black pips-${pipsAmount} pip-index-${i} ${getPipClasses(pipsAmount, i)}`}
      ></div>,
    );
  }

  return (
    <button
      className={`flex h-[100px] w-[100px] cursor-pointer flex-wrap items-center justify-center gap-[22px] self-center justify-self-center rounded-[10px] border-0 bg-main-die font-[bold] text-[42px] shadow-[0_10px_10px_rgba(0,0,0,0.1)] ${hasHeldClass}`}
      onClick={holdDieHandler}
    >
      {diePips}
    </button>
  );
};
export default Die;
