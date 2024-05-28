import React from 'react';
import Header from './UI/Header';
import RollDiceButton from './UI/RollDiceButton';

const GameDescription: React.FC = ({ startHandler }) => (
  <>
    <Header
      title="Tenzies"
      description="Roll until all dice are the same. Click each die to freeze it at its current value between
    rolls."
    />
    <RollDiceButton onClick={startHandler}>Start the game</RollDiceButton>
  </>
);
export default GameDescription;
