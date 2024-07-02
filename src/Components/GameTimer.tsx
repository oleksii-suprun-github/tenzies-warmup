import { useTranslation } from 'react-i18next';

const GameTimer = ({ value }: { value: number }) => {
  const { t } = useTranslation();
  return (
    <div id="game-timer" className="absolute right-[25px] top-[15px] text-lg">
      <strong>{t('game.time')}: </strong>
      {value}
      <span>s</span>
    </div>
  );
};
export default GameTimer;
