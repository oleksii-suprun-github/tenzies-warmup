export type Dice = {
  id: string;
  value: number;
  isHeld: boolean;
};

export type Record = {
  id: string;
  date: string;
  difficultyLabel: string;
  gameTime: number;
  gameClicks: number;
};

export type Difficulty = {
  label: string;
  value: number;
};
