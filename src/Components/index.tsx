import { useWindowSize } from 'usehooks-ts';
import Confetti from 'react-confetti';

import GameDescription from './screens/GameDescription';
import GameResults from './screens/GameResults';
import Board from './screens/Board';
import GameTimer from './GameTimer';

import useGameLogic from '../hooks/useGameLogic';

const TenziesGame = () => {
  const { width, height } = useWindowSize();
  const {
    difficulty,
    allDice,
    isGameWon,
    isGameStarted,
    isAllDiceEqual,
    isAllDiceSelected,
    recordsList,
    gameTime,
    gameClicks,
    difficultyHandler,
    rollDicesHandler,
    holdDieHandler,
  } = useGameLogic();

  return (
    <div className="flex min-h-svh justify-center bg-main-bg">
      <article className="relative flex w-6/12 max-w-[800px] flex-col flex-wrap justify-center self-center rounded-xl bg-main-board px-[50px] py-[75px] shadow-md xs:w-[95%] xl:m-[25px] xl:h-auto xl:w-[90%] xl:p-[25px]">
        {isGameStarted && !isGameWon && (
          <>
            <GameTimer value={gameTime} />
            <Board
              allDice={allDice}
              isGameStarted={isGameStarted}
              isGameWon={isGameWon}
              difficulty={difficulty}
              isRollDisabled={isAllDiceSelected && !isAllDiceEqual}
              holdDieHandler={holdDieHandler}
              rollDicesHandler={rollDicesHandler}
            />
          </>
        )}
        {!isGameStarted && (
          <GameDescription
            records={recordsList}
            difficultyHandler={difficultyHandler}
            startHandler={rollDicesHandler}
          />
        )}
        {isGameWon && (
          <GameResults
            timeTotal={gameTime}
            clicksTotal={gameClicks}
            restartHandler={rollDicesHandler}
          />
        )}
      </article>
      {isGameWon && <Confetti width={width} height={height} />}
    </div>
  );
};

export default TenziesGame;
