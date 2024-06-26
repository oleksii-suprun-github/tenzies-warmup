import { FC } from 'react';
import RecordElement from './RecordElement';

const RecordsTable: FC<{ data: GameRecord[] }> = ({ data: records }) => {
  const recordsElements = records.map((record, index) => (
    <RecordElement key={record.id} data={record} index={index} />
  ));

  return (
    <section
      data-testid="records-list"
      id="records-list"
      className="mt-[35px] flex w-full flex-col items-center justify-center"
    >
      <h2 className="mb-4 text-center text-xl font-extrabold">Top 5 results:</h2>
      <div
        id="records-table-responsive-wrapper"
        className="relative w-full overflow-x-auto"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <table id="records-table" className="table w-full border-collapse">
          <thead className="bg-main-button text-main-die">
            <tr className="text-center">
              <th className="rounded-tl-[35px]"></th>
              <th className="border-main-board-color border p-1.5 text-base">Date</th>
              <th className="border-main-board-color border p-1.5 text-base">Difficulty</th>
              <th className="border-main-board-color border p-1.5 text-base">Total clicks</th>
              <th className="rounded-tr-[35px] text-base">Total time</th>
            </tr>
          </thead>
          <tbody className="text-center">{recordsElements}</tbody>
        </table>
      </div>
    </section>
  );
};
export default RecordsTable;
