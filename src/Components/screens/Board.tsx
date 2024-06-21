import { FC } from 'react';
import { getRollDiceBtnLabel } from 'utils';
import Header from '../Header';
import Die from '../Die';
import RollDiceButton from '../RollDiceButton';

export interface BoardProps {
  allDice: Dice[];
  difficulty: GameDifficulty;
  isGameWon: boolean;
  isGameStarted: boolean;
  rollDicesHandler: () => void;
  holdDieHandler: Function;
}

const Board: FC<BoardProps> = ({
  allDice,
  difficulty,
  isGameWon,
  isGameStarted,
  rollDicesHandler,
  holdDieHandler,
}) => {
  const dice = allDice.map((die) => (
    <Die
      key={die.id}
      holdDieHandler={() => holdDieHandler(die.id)}
      isHeld={die.isHeld}
      value={die.value}
    />
  ));

  let buttonLabel = getRollDiceBtnLabel(isGameStarted, isGameWon);

  return (
    <>
      <Header>
        <h1 data-testid="board-headline">{`Match ${difficulty.value} dice`}</h1>
      </Header>
      <section>
        {dice && <div id="dice-container">{dice}</div>}
        <RollDiceButton onClick={rollDicesHandler}>{buttonLabel}</RollDiceButton>
      </section>
    </>
  );
};
export default Board;
