import React from 'react';
import RollDiceButton from './UI/RollDiceButton';
import Header from './UI/Header';

interface GameResults {
  timeTotal: number;
  clicksTotal: number;
  restartHandler: void;
}

const GameResults: React.Fc = ({ timeTotal, clicksTotal, restartHandler }): GameResults => {
  return (
    <>
      <Header title="Congratulation!" description="You won the game!" />
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
};
export default GameResults;
