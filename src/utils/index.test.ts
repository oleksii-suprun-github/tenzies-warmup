import {
  Difficulties,
  getRandomDieValue,
  setNewDiceSet,
  diceHoldHandler,
  filterRecordsASC,
  getGameSessionTime,
  getPipClasses,
} from './';

describe('Difficulties', () => {
  it('should define difficulty levels correctly', () => {
    expect(Difficulties).toEqual([
      { label: 'easy', value: 5 },
      { label: 'normal', value: 10 },
      { label: 'hard', value: 15 },
    ]);
  });
});

describe('getRandomDieValue', () => {
  it('should return a random value between 1 and 6', () => {
    for (let i = 0; i < 100; i++) {
      const value = getRandomDieValue();
      expect(value).toBeGreaterThanOrEqual(1);
      expect(value).toBeLessThanOrEqual(6);
    }
  });
});

describe('setNewDiceSet', () => {
  it('should return a new set of dice based on the difficulty', () => {
    const diceSet = setNewDiceSet(10);
    expect(diceSet).toHaveLength(10);
    diceSet.forEach((dice) => {
      expect(dice.value).toBeGreaterThanOrEqual(1);
      expect(dice.value).toBeLessThanOrEqual(6);
      expect(dice.isHeld).toBe(false);
    });
  });
});

describe('diceHoldHandler', () => {
  it('should reroll dice that are not held', () => {
    const allDice = [
      { id: '1', value: 1, isHeld: false },
      { id: '2', value: 4, isHeld: true },
    ];
    const newDice = diceHoldHandler(allDice);
    expect(newDice[0].value).toBeGreaterThanOrEqual(1);
    expect(newDice[0].value).toBeLessThanOrEqual(6);
    expect(newDice[1].value).toBe(4);
  });
});

describe('filterRecordsASC', () => {
  it('should return the top 5 records ordered by gameClicks and gameTime', () => {
    const recordsList: GameRecord[] = [
      { id: '1', date: '2024-05-29', difficultyLabel: 'easy', gameTime: 9, gameClicks: 5 },
      { id: '2', date: '2024-05-29', difficultyLabel: 'easy', gameTime: 17, gameClicks: 5 },
      { id: '3', date: '2024-05-29', difficultyLabel: 'easy', gameTime: 8, gameClicks: 7 },
      { id: '4', date: '2024-05-29', difficultyLabel: 'easy', gameTime: 6, gameClicks: 4 },
      { id: '5', date: '2024-05-29', difficultyLabel: 'easy', gameTime: 7, gameClicks: 4 },
      { id: '6', date: '2024-05-29', difficultyLabel: 'easy', gameTime: 5, gameClicks: 6 },
    ];
    const topRecords = filterRecordsASC(recordsList);
    expect(topRecords).toHaveLength(5);
    expect(topRecords[0].id).toBe('4');
    expect(topRecords[1].id).toBe('5');
    expect(topRecords[2].id).toBe('1');
    expect(topRecords[3].id).toBe('2');
    expect(topRecords[4].id).toBe('6');
  });
});

describe('getGameSessionTime', () => {
  it('should return the formatted date string', () => {
    const timestamp = '1717013873000';
    const formattedTime = getGameSessionTime(timestamp, 'en-GB');
    expect(formattedTime).toBe('29 May 2024 at 22:17');
  });
});

describe('getPipClasses', () => {
  it('should return correct classes for pipsAmount = 4 and index = 2', () => {
    const result = getPipClasses(4, 2);
    expect(result).toBe('relative bottom-[-61px] left-[-32px]');
  });

  it('should return correct classes for pipsAmount = 4 and index = 4', () => {
    const result = getPipClasses(4, 4);
    expect(result).toBe('relative right-[-31px]');
  });

  it('should return correct classes for pipsAmount = 5 and index = 2', () => {
    const result = getPipClasses(5, 2);
    expect(result).toBe('relative top-[30px]');
  });

  it('should return correct classes for pipsAmount = 5 and index = 4', () => {
    const result = getPipClasses(5, 4);
    expect(result).toBe('relative left-[-15px]');
  });

  it('should return correct classes for pipsAmount = 5 and index = 5', () => {
    const result = getPipClasses(5, 5);
    expect(result).toBe('relative right-[-15px]');
  });

  it('should return an empty string for pipsAmount other than 4 or 5', () => {
    const result = getPipClasses(3, 2);
    expect(result).toBe('');
  });
});
