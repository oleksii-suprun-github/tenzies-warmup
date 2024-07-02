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
  const { t } = useTranslation();
  return (
    <>
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
