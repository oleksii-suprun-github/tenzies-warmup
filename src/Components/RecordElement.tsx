import { FC } from 'react';
import capitalize from 'lodash/capitalize';
import { getGameSessionTime } from '../utils';

const RecordElement: FC<{ data: GameRecord; index: number }> = ({ data, index }) => {
  const gameSessionTime = getGameSessionTime(data.date);

  return (
    <tr className="record-element">
      <td className="border-main-board-color border p-1.5">#{index + 1}</td>
      <td className="border-main-board-color border p-1.5">{gameSessionTime}</td>
      <td className="border-main-board-color border p-1.5">{capitalize(data.difficultyLabel)}</td>
      <td className="border-main-board-color border p-1.5">{data.gameClicks}</td>
      <td className="border-main-board-color border p-1.5">{data.gameTime}s</td>
    </tr>
  );
};
export default RecordElement;
