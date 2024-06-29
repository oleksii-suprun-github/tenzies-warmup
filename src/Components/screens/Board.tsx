import { FC } from 'react';
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

const Board: FC<BoardProps> = ({ allDice, difficulty, rollDicesHandler, holdDieHandler }) => {
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
      <Header>
        <h1
          data-testid="board-headline"
          className="mb-12 mt-12 text-4xl font-extrabold leading-none"
        >{`Match ${difficulty.value} dice`}</h1>
      </Header>
      <section className="justify-center; flex w-full flex-col items-center">
        {dice && (
          <div
            id="dice-container"
            className="mb-[50px] mt-[25px] grid gap-[25px] xs:grid-cols-[repeat(2,1fr)] sm-md:grid-cols-[repeat(3,1fr)] md:grid-cols-[repeat(5,1fr)]"
          >
            {dice}
          </div>
        )}
        <RollDiceButton onClick={rollDicesHandler}>Roll</RollDiceButton>
      </section>
    </>
  );
};
export default Board;
