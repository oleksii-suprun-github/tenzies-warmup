type Dice = {
  id: string;
  value: number;
  isHeld: boolean;
};

type GameRecord = {
  id: string;
  date: string;
  difficultyLabel: string;
  gameTime: number;
  gameClicks: number;
};

type GameDifficulty = {
  label: string;
  value: number;
};
