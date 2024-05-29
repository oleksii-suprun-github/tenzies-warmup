import React from 'react';
import Header from './UI/Header';
import RecordsTable from './UI/RecordsTable';
import DifficultySelector from './UI/DifficultySelector';
import RollDiceButton from './UI/RollDiceButton';
import { Record } from 'types';

interface GameDescription {
  startHandler: void;
  difficultyHandler: void;
  records: Record[];
}

const GameDescription: React.FC = ({ startHandler, difficultyHandler, records }) => (
  <>
    <Header
      title="🎲 Tenzies"
      description="Roll until all dice are the same. Click each die to freeze it at its current value between
    rolls."
    />
    {!!records.length && <RecordsTable data={records} />}
    <DifficultySelector difficultyHandler={difficultyHandler} />
    <RollDiceButton onClick={startHandler}>Start the game</RollDiceButton>
  </>
);
export default GameDescription;
