import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import {
  Difficulties,
  checkAndSetGameWonForCypress,
  diceHoldHandler,
  filterRecordsASC,
  setNewDiceSet,
} from 'utils';

type useGameLogicType = {
  difficulty: GameDifficulty;
  allDice: Dice[];
  isGameWon: boolean;
  isGameStarted: boolean;
  isAllDiceEqual: boolean;
  isAllDiceSelected: boolean;
  recordsList: GameRecord[];
  gameTime: number;
  gameClicks: number;
  difficultyHandler: (difficultyLabel: string) => void;
  rollDicesHandler: () => void;
  holdDieHandler: (id: string) => void;
};

const useGameLogic = (): useGameLogicType => {
  const STORAGE_VARIABLE = 'tenzies-wins-records';
  const recordsFromStorage = localStorage.getItem(STORAGE_VARIABLE);

  const [difficulty, setDifficulty] = useState<GameDifficulty>(Difficulties[1]);
  const [allDice, setAllDice] = useState<Dice[]>([]);
  const [isGameWon, setGameWon] = useState<boolean>(false);
  const [isGameStarted, setGameStarted] = useState<boolean>(false);
  const [isAllDiceEqual, setIsAllDiceEqual] = useState<boolean>(false);
  const [isAllDiceSelected, setIsAllDiceSelected] = useState<boolean>(false);
  const [recordsList, setRecordsList] = useState<GameRecord[]>(
    (recordsFromStorage && JSON.parse(recordsFromStorage)) || [],
  );
  const [gameTime, setGameTime] = useState<number>(0);
  const [gameClicks, setGameClicks] = useState<number>(0);

  useEffect(() => {
    let gameTimer: NodeJS.Timeout;
    if (isGameStarted && !isGameWon) {
      gameTimer = setInterval(() => {
        setGameTime((prevGameTime) => prevGameTime + 1);
      }, 1000);
    }
    return () => clearInterval(gameTimer);
  }, [isGameStarted, isGameWon]);

  useEffect(() => {
    if (isGameStarted && !isGameWon) {
      checkAndSetGameWonForCypress(
        allDice,
        setGameWon,
        setRecordsList,
        difficulty,
        gameTime,
        gameClicks,
      );

      const firstDieValue = allDice[0]?.value;
      setIsAllDiceEqual(allDice.every((die) => die.value === firstDieValue));
      setIsAllDiceSelected(allDice.every((die) => die.isHeld === true));

      if (isAllDiceEqual && isAllDiceSelected) {
        setRecordsList((prevRecordsList) =>
          filterRecordsASC([
            {
              id: nanoid(),
              date: Date.now().toString(),
              difficultyLabel: difficulty.label,
              gameTime,
              gameClicks,
            },
            ...prevRecordsList,
          ]),
        );
        setGameWon(true);
        setDifficulty(Difficulties[1]);
      }
    }
  }, [
    allDice,
    difficulty.label,
    gameClicks,
    gameTime,
    isAllDiceEqual,
    isAllDiceSelected,
    isGameStarted,
    isGameWon,
  ]);

  useEffect(() => {
    if (isGameWon) {
      localStorage.setItem(STORAGE_VARIABLE, JSON.stringify(recordsList));
    }
  }, [recordsList, isGameWon]);

  const difficultyHandler = (difficultyLabel: string) => {
    setDifficulty(Difficulties.find((item) => item.label === difficultyLabel) || Difficulties[1]);
  };

  const rollDicesHandler = () => {
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
  };

  const holdDieHandler = (id: string) => {
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
  };

  return {
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
  };
};
export default useGameLogic;
