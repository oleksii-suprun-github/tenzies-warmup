import React from 'react';
import Die from './Die';
import { Dice } from 'types';

interface BoardProps {
  allDice: Dice[];
  isGameWon: boolean;
  rollDicesHandler: void;
  holdDieHandler: void;
}

const Board: React.FC<BoardProps> = ({ allDice, isGameWon, rollDicesHandler, holdDieHandler }) => {
  const dice = allDice.map((die) => (
    <Die
      key={die.id}
      holdDieHandler={() => holdDieHandler(die.id)}
      isHeld={die.isHeld}
      value={die.value}
    />
  ));

  return (
    <>
      <div id="dices-container">{dice}</div>
      <button id="roll-dices-btn" onClick={rollDicesHandler}>
        {isGameWon ? 'Play again' : 'Roll'}
      </button>
    </>
  );
};
export default Board;
