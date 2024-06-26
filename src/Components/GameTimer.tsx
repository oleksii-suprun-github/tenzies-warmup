import { FC } from 'react';

const GameTimer: FC<{ value: number }> = ({ value }) => (
  <div id="game-timer" className="absolute right-[25px] top-[15px] text-lg">
    <strong>Time: </strong>
    {value}
    <span>s</span>
  </div>
);
export default GameTimer;
