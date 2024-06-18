import React, { MouseEventHandler, ReactNode } from 'react';

const RollDiceButton: React.FC<{
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}> = ({ children, onClick }) => (
  <button id="roll-dice-btn" onClick={onClick}>
    {children}
  </button>
);

export default RollDiceButton;
