import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { nanoid } from 'nanoid';

import { Difficulties, diceHoldHandler, filterRecords, setNewDiceSet } from 'utils';
import { Dice, Difficulty } from 'types';

import GameDescription from './screens/GameDescription';
import GameResults from './screens/GameResults';
import Board from './screens/Board';

import GameTimer from './GameTimer';

const App: React.FC = () => {
  const STORAGE_VARIABLE = 'tenzies-wins-records';
  const recordsFromStorage = localStorage.getItem(STORAGE_VARIABLE);

  const { width, height } = useWindowSize();

  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulties[1]);

  const [allDice, setAllDice] = useState<Dice[]>([]);

  const [isGameWon, setGameWon] = useState<boolean>(false);
  const [isGameStarted, setGameStarted] = useState<boolean>(false);

  const [recordsList, setRecordsList] = useState(
    (recordsFromStorage && JSON.parse(recordsFromStorage)) || [],
  );
  const [gameTime, setGameTime] = useState<number>(0);
  const [gameClicks, setGameClicks] = useState<number>(0);

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
        setRecordsList((prevRecordsList) =>
          filterRecords([
            {
              id: nanoid(),
              date: new Date().toString(),
              difficultyLabel: difficulty.label,
              gameTime: gameTime,
              gameClicks: gameClicks,
            },
            ...prevRecordsList,
          ]),
        );

        setGameWon(true);
        setDifficulty(Difficulties[1]);
      }
    }
  }, [allDice, difficulty.label, gameClicks, gameTime, isGameStarted, isGameWon]);

  useEffect(() => {
    if (isGameWon) {
      localStorage.setItem(STORAGE_VARIABLE, JSON.stringify(recordsList));
    }
  }, [recordsList, isGameWon]);

  function difficultyHandler(difficultyLabel) {
    setDifficulty(Difficulties.find((item) => item.label === difficultyLabel) || Difficulties[1]);
  }

  function rollDicesHandler() {
    if (isGameStarted) {
      setAllDice((prevAllDice) => {
        if (isGameWon) {
          setGameWon(false);
          setGameStarted(false);
          return [];
        } else {
          return diceHoldHandler(prevAllDice);
        }
      });
    } else {
      setGameStarted(true);
      setGameTime(0);
      setGameClicks(0);
      setAllDice(setNewDiceSet(difficulty.value));
    }
  }

  function holdDieHandler(id) {
    setGameClicks((prevClicks) => prevClicks + 1);
    setAllDice((prevAllDice) =>
      prevAllDice.map((die) => {
        if (die.id === id) {
          return {
            ...die,
            isHeld: !die.isHeld,
          };
        }
        return die;
      }),
    );
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
              difficulty={difficulty}
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
    </>
  );
};
export default App;
