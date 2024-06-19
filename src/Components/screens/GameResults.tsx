import React, { MouseEventHandler } from 'react';
import RollDiceButton from '../RollDiceButton';
import Header from '../Header';

export interface GameResultsProps {
  timeTotal: number;
  clicksTotal: number;
  restartHandler: MouseEventHandler<HTMLButtonElement>;
}

const GameResults: React.FC<GameResultsProps> = ({ timeTotal, clicksTotal, restartHandler }) => (
  <>
    <Header>
      <h1>Congratulation</h1>
      <p>You won the game!</p>
    </Header>
    <div id="results">
      <p>
        Total Time: <strong>{timeTotal} seconds</strong>
      </p>
      <p>
        Total Clicks: <strong>{clicksTotal} clicks</strong>
      </p>
    </div>
    <RollDiceButton onClick={restartHandler}>Start again</RollDiceButton>
  </>
);
export default GameResults;
