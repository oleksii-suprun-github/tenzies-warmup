import { FC } from 'react';
import capitalize from 'lodash/capitalize';
import { getGameSessionTime } from '../utils';

const RecordElement: FC<{ data: GameRecord; index: number }> = ({ data, index }) => {
  const gameSessionTime = getGameSessionTime(data.date);

  return (
    <tr className="record-element">
      <td>#{index + 1}</td>
      <td>{gameSessionTime}</td>
      <td>{capitalize(data.difficultyLabel)}</td>
      <td>{data.gameClicks}</td>
      <td>{data.gameTime}s</td>
    </tr>
  );
};
export default RecordElement;
