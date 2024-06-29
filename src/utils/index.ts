import { nanoid } from 'nanoid';
import { toDate } from 'date-fns';
import { format, toZonedTime } from 'date-fns-tz';
import { orderBy, take } from 'lodash-es';

export const Difficulties = [
  { label: 'easy', value: 5 },
  { label: 'normal', value: 10 },
  { label: 'hard', value: 15 },
];

export const getRandomDieValue = (): number => {
  return Math.ceil(Math.random() * 6);
};

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

export const filterRecordsASC = (records: GameRecord[]) =>
  take(orderBy(records, ['gameClicks', 'gameTime'], ['asc', 'asc']), 5);

export const getGameSessionTime = (timestamp: string): string => {
  const date = toZonedTime(toDate(+timestamp), 'UTC');
  const formattedDate = format(date, "do MMMM 'at' HH:mm", { timeZone: 'UTC' });
  return formattedDate;
};

export const getPipClasses = (pipsAmount: number, index: number) => {
  switch (pipsAmount) {
    case 4:
      if (index === 2) return 'bottom-[-61px] left-[-32px]';
      if (index === 4) return 'right-[-31px]';
      break;
    case 5:
      if (index === 2) return 'top-[30px]';
      if (index === 4) return 'left-[-15px]';
      if (index === 5) return 'right-[-15px]';
      break;
    default:
      return '';
  }
  return '';
};

export const checkAndSetGameWonForCypress = (
  allDice: Dice[],
  setGameWon: (value: boolean) => void,
  setRecordsList: (value: (prevRecordsList: GameRecord[]) => GameRecord[]) => void,
  difficulty: GameDifficulty,
  gameTime: number,
  gameClicks: number,
): void => {
  if (import.meta.env.DEV && allDice.every((die) => die.isHeld)) {
    setGameWon(true);
    setRecordsList((prevRecordsList) =>
      filterRecordsASC([
        {
          id: nanoid(),
          date: Date.now().toString(),
          difficultyLabel: difficulty.label,
          gameTime: gameTime,
          gameClicks: gameClicks,
        },
        ...prevRecordsList,
      ]),
    );
  }
  return;
};
