import { nanoid } from 'nanoid';
import { Dice } from 'types';

export const Difficulties = [
  { label: 'easy', value: 5 },
  { label: 'normal', value: 10 },
  { lalbel: 'hard', value: 15 },
];

export const getRandomDieValue = () => Math.ceil(Math.random() * 6);

export const setNewDice = (difficulty: number = 10) => {
  let dicesArr: Dice[] = [];
  for (let i = 0; i < difficulty; i++) {
    dicesArr.push({ id: nanoid(), value: getRandomDieValue(), isHeld: false });
  }
  return dicesArr;
};

export const getRollDiceBtnLabel = (isGameStarted: boolean, isGameWon: boolean) => {
  if (!isGameStarted) {
    return 'Start the game';
  } else if (isGameWon) {
    return 'Play again';
  } else {
    return 'Roll';
  }
};
