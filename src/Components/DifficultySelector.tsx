import { useTranslation } from 'react-i18next';

const DifficultySelector = ({ difficultyHandler }: { difficultyHandler: Function }) => {
  const { t } = useTranslation();
  return (
    <section id="difficulty" className="mt=[35px] flex w-full flex-col items-center justify-center">
      <h2 className="mb-4 mt-10 text-center text-2xl font-extrabold">
        {t('game.difficulty.headline')}:
      </h2>
      <select
        name="difficulty"
        data-testid="difficulty-selector"
        className="select select-bordered"
        onChange={(e) => difficultyHandler(e.target.value)}
        aria-label={`${t('game.difficulty.aria.label')}`}
        defaultValue="normal"
      >
        <option value="easy">{t('game.difficulty.label.easy')}</option>
        <option value="normal">{t('game.difficulty.label.normal')}</option>
        <option value="hard">{t('game.difficulty.label.hard')}</option>
      </select>
    </section>
  );
};
export default DifficultySelector;
