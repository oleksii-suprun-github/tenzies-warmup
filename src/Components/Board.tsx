import React from 'react';
import Die from './Die';
import { Dice } from 'types';

interface BoardProps {
  allDice: Dice[];
  rollDicesHandler: void;
  holdDieHandler: void;
}

const Board: React.FC<BoardProps> = ({ allDice, rollDicesHandler, holdDieHandler }) => {
  const dice = allDice.map((die) => (
    <Die
      key={die.id}
      holdDieHandler={() => holdDieHandler(die.id)}
      isHeld={die.isHeld}
      value={die.value}
    />
  ));

  return (
    <main>
      <div id="dices-container">{dice}</div>
      <button id="roll-dices-btn" onClick={rollDicesHandler}>
        Roll
      </button>
    </main>
  );
};
export default Board;
