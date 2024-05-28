import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { Difficulties, getRandomDieValue, setNewDice } from './utils';
import GameDescription from './Components/GameDescription';
import GameTimer from './Components/UI/GameTimer';
import GameResults from './Components/GameResults';
import Board from './Components/Board';
import { Dice, Difficulty } from 'types';

const App: React.FC = () => {
  const { width, height } = useWindowSize();

  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulties[1]);

  const [allDice, setAllDice] = useState<Dice[]>([]);

  const [isGameWon, setGameWon] = useState<Boolean>(false);
  const [isGameStarted, setGameStarted] = useState<Boolean>(false);

  const [recordsList, setRecordsList] = useState(null);
  const [gameTime, setGameTime] = useState<Number>(0);
  const [clicks, setClicks] = useState<Number>(0);

  useEffect(() => {
    let gameTimer;
    if (isGameStarted && !isGameWon) {
      gameTimer = setInterval(() => {
        setGameTime((prevGameTime) => prevGameTime + 1);
      }, 1000);
    }
    return () => clearInterval(gameTimer);
  }, [isGameStarted, isGameWon]);

  useEffect(() => {
    if (isGameStarted && !isGameWon) {
      const firstDieValue = allDice[0]?.value;
      const isAllDiceEqual = allDice.every(
        (die) => die.value === firstDieValue && die.isHeld === true,
      );

      if (isAllDiceEqual) {
        setGameWon(true);
      }
    }
  }, [allDice, isGameStarted, isGameWon]);

  function rollDicesHandler() {
    if (isGameStarted) {
      setAllDice((prevAllDice) => {
        if (isGameWon) {
          setGameWon(false);
          setGameStarted(false);
          return [];
        } else {
          return prevAllDice.map((die) => {
            if (!die.isHeld) {
              return {
                ...die,
                value: getRandomDieValue(),
              };
            }
            return die;
          });
        }
      });
    } else {
      setGameStarted(true);
      setGameTime(0);
      setClicks(0);
      setAllDice(setNewDice());
    }
  }

  function holdDieHandler(id) {
    setClicks((prevClicks) => prevClicks + 1);
    setAllDice((prevAllDice) => {
      return prevAllDice.map((die) => {
        if (die.id === id) {
          return {
            ...die,
            isHeld: !die.isHeld,
          };
        }
        return die;
      });
    });
  }

  return (
    <>
      <article>
        {isGameStarted && !isGameWon && (
          <>
            <GameTimer value={gameTime} />
            <Board
              allDice={allDice}
              isGameStarted={isGameStarted}
              isGameWon={isGameWon}
              holdDieHandler={holdDieHandler}
              rollDicesHandler={rollDicesHandler}
            />
          </>
        )}
        {!isGameStarted && <GameDescription startHandler={rollDicesHandler} />}
        {isGameWon && (
          <GameResults
            timeTotal={gameTime}
            clicksTotal={clicks}
            restartHandler={rollDicesHandler}
          />
        )}
      </article>
      {isGameWon && <Confetti width={width} height={height} />}
    </>
  );
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
