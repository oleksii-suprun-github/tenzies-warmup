import React, { MouseEventHandler } from 'react';
import Header from '../Header';
import RecordsTable from '../RecordsTable';
import DifficultySelector from '../DifficultySelector';
import RollDiceButton from '../RollDiceButton';
import { Record } from 'types';

interface GameDescriptionProps {
  startHandler: MouseEventHandler<HTMLButtonElement>;
  difficultyHandler: Function;
  records: Record[];
}

const GameDescription: React.FC<GameDescriptionProps> = ({
  startHandler,
  difficultyHandler,
  records,
}) => (
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
