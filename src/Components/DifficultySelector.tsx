import { FC } from 'react';

const DifficultySelector: FC<{ difficultyHandler: Function }> = ({ difficultyHandler }) => (
  <section id="difficulty" className="mt=[35px] justify-center; flex w-full flex-col items-center">
    <h2 className="mb-4 mt-10 text-center text-2xl font-extrabold">
      Please choose the difficulty:
    </h2>
    <select
      name="difficulty"
      id="difficulty-selector"
      className="select select-bordered"
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
