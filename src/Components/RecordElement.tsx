import { FC } from 'react';
import capitalize from 'lodash/capitalize';
import { getGameSessionTime } from '../utils';
import { Record } from 'types';

const RecordElement: FC<{ data: Record; index: number }> = ({ data, index }) => {
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
