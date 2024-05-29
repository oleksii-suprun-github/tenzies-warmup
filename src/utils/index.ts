import { nanoid } from 'nanoid';
import { Dice, Record } from 'types';
import { orderBy, take } from 'lodash';

export const Difficulties = [
  { label: 'easy', value: 5 },
  { label: 'normal', value: 10 },
  { label: 'hard', value: 15 },
];

export const getRandomDieValue = (): number => Math.ceil(Math.random() * 6);

export const setNewDiceSet = (difficulty: number = 10): Dice[] => {
  let dicesArr: Dice[] = [];
  for (let i = 0; i < difficulty; i++) {
    dicesArr.push({ id: nanoid(), value: getRandomDieValue(), isHeld: false });
  }
  return dicesArr;
};

export const filterRecords = (records: Record[]) => {
  return take(orderBy(records, ['gameClicks', 'gameTime'], ['asc', 'asc']), 5);
};

export const getGameSessionTime = (timestamp: string): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}th ${month} at ${hours}:${minutes}`;
};

export const getRollDiceBtnLabel = (isGameStarted: boolean, isGameWon: boolean): string => {
  if (!isGameStarted) {
    return 'Start the game';
  } else if (isGameWon) {
    return 'Play again';
  } else {
    return 'Roll';
  }
};
