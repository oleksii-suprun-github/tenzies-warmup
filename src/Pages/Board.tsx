import React from 'react';
import { getRollDiceBtnLabel } from '../utils';
import Header from '../components/Header';
import Die from '../components/Die';
import RollDiceButton from '../components/RollDiceButton';
import { Dice, Difficulty } from 'types';

interface BoardProps {
  allDice: Dice[];
  difficulty: Difficulty;
  isGameWon: boolean;
  isGameStarted: boolean;
  rollDicesHandler: () => void;
  holdDieHandler: Function;
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
      <Header>
        <h1>{`Match ${difficulty.value} dice`}</h1>
      </Header>
      <section>
        {dice && <div id="dice-container">{dice}</div>}
        <RollDiceButton onClick={rollDicesHandler}>{buttonLabel}</RollDiceButton>
      </section>
    </>
  );
};
export default Board;
