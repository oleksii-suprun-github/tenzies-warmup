import capitalize from 'lodash-es/capitalize';
import { useTranslation } from 'react-i18next';
import { getGameSessionTime } from '../utils';

const RecordElement = ({ data, index }: { key: string; data: GameRecord; index: number }) => {
  const { i18n } = useTranslation();
  const gameSessionTime = getGameSessionTime(data.date, i18n.language);

  return (
    <tr className="record-element bg-white">
      <td className="border-main-board-color border border-gray-400 p-1.5">{index + 1}</td>
      <td className="border-main-board-color border border-gray-400 p-1.5">{gameSessionTime}</td>
      <td className="border-main-board-color border border-gray-400 p-1.5">
        {capitalize(data.difficultyLabel)}
      </td>
      <td className="border-main-board-color border border-gray-400 p-1.5">{data.gameClicks}</td>
      <td className="border-main-board-color border border-gray-400 p-1.5">{data.gameTime}s</td>
    </tr>
  );
};
export default RecordElement;
