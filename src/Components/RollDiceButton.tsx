import React, { MouseEventHandler, ReactNode } from 'react';

const RollDiceButton: React.FC<{
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}> = ({ children, onClick }) => (
  <button
    data-testid="roll-dice-button"
    className="btn btn-primary mx-auto my-[25px] mt-[50px] w-fit min-w-32 bg-main-button text-2xl text-main-die"
    onClick={onClick}
  >
    {children}
  </button>
);

export default RollDiceButton;
