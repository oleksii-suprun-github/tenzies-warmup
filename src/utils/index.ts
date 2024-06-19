import { nanoid } from 'nanoid';
import { toDate } from 'date-fns';
import { format, toZonedTime } from 'date-fns-tz';
import { orderBy, take } from 'lodash';
import { Dice, Record } from 'types';

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

export const diceHoldHandler = (dice) =>
  dice.map((die) => {
    if (!die.isHeld) {
      return {
        ...die,
        value: getRandomDieValue(),
      };
    }
    return die;
  });

export const filterRecordsASC = (records: Record[]) =>
  take(orderBy(records, ['gameClicks', 'gameTime'], ['asc', 'asc']), 5);

export const getGameSessionTime = (timestamp: string): string => {
  const date = toZonedTime(toDate(+timestamp), 'UTC');
  const formattedDate = format(date, "do MMMM 'at' HH:mm", { timeZone: 'UTC' });
  return formattedDate;
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
