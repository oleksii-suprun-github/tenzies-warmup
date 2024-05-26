import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { nanoid } from 'nanoid';
import GameDescription from 'Components/GameDescription';
import Board from './Components/Board';
import { Dice } from 'types';

const App: React.FC = () => {
  const getRandomDieValue = () => Math.ceil(Math.random() * 6);
  const [allDice, setAllDice] = useState<Dice[]>(allNewDice());

  function allNewDice() {
    let dicesArr: Dice[] = [];
    for (let i = 0; i < 10; i++) {
      dicesArr.push({ id: nanoid(), value: getRandomDieValue(), isHeld: false });
    }
    return dicesArr;
  }

  function rollDicesHandler() {
    setAllDice((prevAllDice) => {
      return prevAllDice.map((die) => {
        if (!die.isHeld) {
          return {
            ...die,
            value: getRandomDieValue(),
          };
        }
        return die;
      });
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
    <main>
      <GameDescription />
      <Board
        allDice={allDice}
        holdDieHandler={holdDieHandler}
        rollDicesHandler={rollDicesHandler}
      />
    </main>
  );
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
