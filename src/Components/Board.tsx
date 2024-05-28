import React from 'react';
import { getRollDiceBtnLabel } from '../utils';
import Header from './UI/Header';
import Die from './UI/Die';
import RollDiceButton from './UI/RollDiceButton';
import { Dice, Difficulty } from 'types';

interface BoardProps {
  allDice: Dice[];
  difficulty: Difficulty;
  isGameWon: boolean;
  isGameStarted: boolean;
  rollDicesHandler: void;
  holdDieHandler: void;
}

const Board: React.FC<BoardProps> = ({
  allDice,
  difficulty,
  isGameWon,
  isGameStarted,
  rollDicesHandler,
  holdDieHandler,
}) => {
  const dice = allDice.length
    ? allDice.map((die) => (
        <Die
          key={die.id}
          holdDieHandler={() => holdDieHandler(die.id)}
          isHeld={die.isHeld}
          value={die.value}
        />
      ))
    : null;

  let buttonLabel = getRollDiceBtnLabel(isGameStarted, isGameWon);

  return (
    <>
      <Header title={`Match ${difficulty.value} dice`} />
      <section>
        {dice && <div id="dice-container">{dice}</div>}
        <RollDiceButton onClick={rollDicesHandler}>{buttonLabel}</RollDiceButton>
      </section>
    </>
  );
};
export default Board;
