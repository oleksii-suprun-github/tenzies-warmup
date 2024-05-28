import React from 'react';

const GameTimer: React.FC = ({ value }: { value: number }) => (
  <div id="game-timer">
    <strong>Timer: </strong>
    {value}
    <span>s</span>
  </div>
);
export default GameTimer;
