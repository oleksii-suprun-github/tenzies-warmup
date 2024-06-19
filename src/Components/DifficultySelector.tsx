import { FC } from 'react';

const DifficultySelector: FC<{ difficultyHandler: Function }> = ({ difficultyHandler }) => (
  <section id="difficulty">
    <h2>Please choose the difficulty:</h2>
    <select
      name="difficulty"
      id="difficulty-selector"
      onChange={(e) => difficultyHandler(e.target.value)}
      defaultValue="normal"
    >
      <option value="easy">Easy</option>
      <option value="normal">Normal</option>
      <option value="hard">Hard</option>
    </select>
  </section>
);
export default DifficultySelector;
