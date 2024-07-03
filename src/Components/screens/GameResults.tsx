import { MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import RollDiceButton from '../RollDiceButton';
import Header from '../Header';

export interface GameResultsProps {
  timeTotal: number;
  clicksTotal: number;
  restartHandler: MouseEventHandler<HTMLButtonElement>;
}

const GameResults = ({ timeTotal, clicksTotal, restartHandler }: GameResultsProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Header>
        <h1 className="mb-6 text-4xl font-extrabold leading-none">
          {t('game.congratulation.headline')}
        </h1>
        <p className="text-lg">{t('game.congratulation.description')}</p>
      </Header>
      <div id="results" className="mx-auto my-0 mt-[50px]">
        <p className="mb-2.5">
          {t('game.congratulation.totalTime')}:&nbsp;
          <strong>
            {timeTotal} {t('seconds')}
          </strong>
        </p>
        <p>
          {t('game.congratulation.totalClicks')}:&nbsp;
          <strong>
            {clicksTotal} {t('clicks')}
          </strong>
        </p>
      </div>
      <RollDiceButton onClick={restartHandler}>{t('game.reset')}</RollDiceButton>
    </>
  );
};

export default GameResults;
