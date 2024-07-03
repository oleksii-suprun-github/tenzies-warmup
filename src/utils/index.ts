import { nanoid } from 'nanoid';
import { orderBy, take } from 'lodash-es';
import i18n from '../i18n';

declare global {
  interface Window {
    Cypress?: {
      env: any;
    };
  }
}

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

export const getGameSessionTime = (timestamp: string, lang: string): string => {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const gameSessionDate = new Intl.DateTimeFormat(lang, {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: userTimezone,
  }).format(+timestamp);

  return gameSessionDate.replace(',', ` ${i18n.t('game.records.at')}`);
};

export const getPipClasses = (pipsAmount: number, index: number) => {
  switch (pipsAmount) {
    case 4:
      if (index === 2) return 'relative bottom-[-61px] left-[-32px]';
      if (index === 4) return 'relative right-[-31px]';
      break;
    case 5:
      if (index === 2) return 'relative top-[30px]';
      if (index === 4) return 'relative left-[-15px]';
      if (index === 5) return 'relative right-[-15px]';
      break;
    default:
      return '';
  }
  return '';
};

/**
 * This function is designed to work only with Cypress for end-to-end testing. It is not used in production build.
 */
export const checkAndSetGameWonForCypress = (
  allDice: Dice[],
  setGameWon: (value: boolean) => void,
  setRecordsList: (value: (prevRecordsList: GameRecord[]) => GameRecord[]) => void,
  difficulty: GameDifficulty,
  gameTime: number,
  gameClicks: number,
): void => {
  if (
    window?.Cypress?.env('skipRollDice') &&
    import.meta.env.DEV &&
    allDice.every((die) => die.isHeld)
  ) {
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
