import React from 'react';
import RollDiceButton from '../Components/RollDiceButton';
import Header from '../Components/Header';

interface GameResultsProps {
  timeTotal: number;
  clicksTotal: number;
  restartHandler: void;
}

const GameResults: React.Fc = ({ timeTotal, clicksTotal, restartHandler }): GameResultsProps => (
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
