import React from 'react';
import Header from './UI/Header';
import RollDiceButton from './UI/RollDiceButton';

interface GameDescription {
  startHandler: void;
  difficultyHandler: void;
}

const GameDescription: React.FC = ({ startHandler, difficultyHandler }) => (
  <>
    <Header
      title="Tenzies"
      description="Roll until all dice are the same. Click each die to freeze it at its current value between
    rolls. Please choose the difficulty."
    />
    <section>
      <select
        name="difficulty"
        id="difficulty"
        onChange={(e) => difficultyHandler(e.target.value)}
        defaultValue="normal"
      >
        <option value="easy">Easy</option>
        <option value="normal">Normal</option>
        <option value="hard">Hard</option>
      </select>
      <RollDiceButton onClick={startHandler}>Start the game</RollDiceButton>
    </section>
  </>
);
export default GameDescription;
