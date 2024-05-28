import React from 'react';

const RollDiceButton: React.FC = ({ children, onClick }) => (
  <button id="roll-dice-btn" onClick={onClick}>
    {children}
  </button>
);

export default RollDiceButton;
