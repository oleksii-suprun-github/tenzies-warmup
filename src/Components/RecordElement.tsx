import React from 'react';
import { getGameSessionTime } from '../utils';
import { Record } from 'types';

const RecordElement: React.FC = ({ data, index }: { data: Record; index: number }) => {
  const gameSessionTime = getGameSessionTime(data.date);
  const difficultyLabel =
    data.difficultyLabel[0].toLocaleUpperCase() + data.difficultyLabel.slice(1);

  return (
    <tr className="record-element">
      <td>#{index + 1}</td>
      <td>{gameSessionTime}</td>
      <td>{difficultyLabel}</td>
      <td>{data.gameClicks}</td>
      <td>{data.gameTime}s</td>
    </tr>
  );
};
export default RecordElement;
