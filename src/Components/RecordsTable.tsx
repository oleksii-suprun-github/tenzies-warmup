import { FC } from 'react';
import RecordElement from './RecordElement';

const RecordsTable: FC<{ data: GameRecord[] }> = ({ data: records }) => {
  const recordsElements = records.map((record, index) => (
    <RecordElement key={record.id} data={record} index={index} />
  ));

  return (
    <section data-testid="records-list" id="records-list">
      <h2>Top 5 results:</h2>
      <div id="records-table-responsive-wrapper">
        <table id="records-table">
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Difficulty</th>
              <th>Total clicks</th>
              <th>Total time</th>
            </tr>
          </thead>
          <tbody>{recordsElements}</tbody>
        </table>
      </div>
    </section>
  );
};
export default RecordsTable;
