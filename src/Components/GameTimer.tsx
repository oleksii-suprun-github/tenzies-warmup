import { FC } from 'react';

const GameTimer: FC<{ value: number }> = ({ value }) => (
  <div id="game-timer">
    <strong>Time: </strong>
    {value}
    <span>s</span>
  </div>
);
export default GameTimer;
