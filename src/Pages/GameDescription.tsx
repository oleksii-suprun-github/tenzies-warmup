import React from 'react';
import Header from '../Components/Header';
import RecordsTable from '../Components/RecordsTable';
import DifficultySelector from '../Components/DifficultySelector';
import RollDiceButton from '../Components/RollDiceButton';
import { Record } from 'types';

interface GameDescription {
  startHandler: void;
  difficultyHandler: void;
  records: Record[];
}

const GameDescription: React.FC = ({ startHandler, difficultyHandler, records }) => (
  <>
    <Header>
      <h1>🎲 Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its current value between
        rolls.
      </p>
    </Header>
    {!!records.length && <RecordsTable data={records} />}
    <DifficultySelector difficultyHandler={difficultyHandler} />
    <RollDiceButton onClick={startHandler}>Start the game</RollDiceButton>
  </>
);
export default GameDescription;
