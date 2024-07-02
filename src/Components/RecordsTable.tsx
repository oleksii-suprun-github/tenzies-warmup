import { useTranslation } from 'react-i18next';
import RecordElement from './RecordElement';

const RecordsTable = ({ data: records }: { data: GameRecord[] }) => {
  const { t } = useTranslation();

  const recordsElements = records.map((record, index) => (
    <RecordElement key={record.id} data={record} index={index} />
  ));

  return (
    <section
      data-testid="records-list"
      id="records-list"
      className="mt-[50px] flex w-full flex-col items-center justify-center"
    >
      <h2 className="mb-4 text-center text-xl font-extrabold">{t('game.records.headline')}:</h2>
      <div
        data-testid="records-table"
        id="records-table-responsive-wrapper"
        className="relative w-full overflow-x-auto"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <table id="records-table" className="table table-sm">
          <thead className="bg-main-button text-main-die">
            <tr className="border-separate text-center">
              <th className="border-main-board-color border border-gray-400 text-base">#</th>
              <th className="border-main-board-color border border-gray-400 text-base">
                {t('game.records.date')}
              </th>
              <th className="border-main-board-color border border-gray-400 text-base">
                {t('game.records.date')}
              </th>
              <th className="border-main-board-color border border-gray-400 text-base">
                {t('game.records.totalClicks')}
              </th>
              <th className="border-main-board-color border border-gray-400 text-base">
                {t('game.records.totalTime')}
              </th>
            </tr>
          </thead>
          <tbody className="text-center">{recordsElements}</tbody>
        </table>
      </div>
    </section>
  );
};
export default RecordsTable;
