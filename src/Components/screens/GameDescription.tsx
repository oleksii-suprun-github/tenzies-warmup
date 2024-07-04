import { MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import RecordsTable from '../RecordsTable';
import DifficultySelector from '../DifficultySelector';
import RollDiceButton from '../RollDiceButton';

export interface GameDescriptionProps {
  startHandler: MouseEventHandler<HTMLButtonElement>;
  difficultyHandler: Function;
  records?: GameRecord[];
}

const GameDescription = ({ startHandler, difficultyHandler, records }: GameDescriptionProps) => {
  const { t, i18n } = useTranslation();

  const onClickHandler = () => {
    i18n.changeLanguage(i18n.language === 'en-GB' ? 'de-DE' : 'en-GB');
  };

  return (
    <>
      <button
        data-testid="language-switcher"
        onClick={onClickHandler}
        className="btn ml-auto flex w-auto justify-end bg-main-board text-3xl shadow-none xs-xl:absolute xs-xl:right-[10px] xs-xl:top-[10px] xl:static"
        aria-label={`${t('game.aria.langSwitcher')}`}
      >
        {i18n.language === 'en-GB' ? '🇩🇪' : '🇬🇧'}
      </button>
      <Header>
        <h1 className="mb-6 mt-5 text-4xl font-extrabold leading-none">🎲 Tenzies</h1>
        <p className="text-lg">{t('game.description')}</p>
      </Header>
      {!!records?.length && <RecordsTable data={records} />}
      <DifficultySelector difficultyHandler={difficultyHandler} />
      <RollDiceButton onClick={startHandler}>{t('game.start')}</RollDiceButton>
    </>
  );
};
export default GameDescription;
