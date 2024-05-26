import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { nanoid } from 'nanoid';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import GameDescription from './Components/GameDescription';
import Board from './Components/Board';
import { Dice } from 'types';

const App: React.FC = () => {
  const getRandomDieValue = () => Math.ceil(Math.random() * 6);
  const { width, height } = useWindowSize();
  const [isGameWon, setGameWon] = useState<Boolean>(false);
  const [allDice, setAllDice] = useState<Dice[]>(allNewDice());

  function allNewDice() {
    let dicesArr: Dice[] = [];
    for (let i = 0; i < 10; i++) {
      dicesArr.push({ id: nanoid(), value: getRandomDieValue(), isHeld: false });
    }
    return dicesArr;
  }

  useEffect(() => {
    const firstDieValue = allDice[0].value;
    const isAllDiceEqual = allDice.every(
      (die) => die.value === firstDieValue && die.isHeld === true,
    );

    isAllDiceEqual && setGameWon(true);
  }, [allDice]);

  function rollDicesHandler() {
    setAllDice((prevAllDice) => {
      if (isGameWon) {
        setGameWon(false);
        return allNewDice();
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
  }

  function holdDieHandler(id) {
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
    <article>
      <GameDescription />
      <Board
        allDice={allDice}
        holdDieHandler={holdDieHandler}
        rollDicesHandler={rollDicesHandler}
        isGameWon={isGameWon}
      />
      {isGameWon && <Confetti width={width} height={height} />}
    </article>
  );
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
