import { MouseEventHandler } from 'react';
import RollDiceButton from '../RollDiceButton';
import Header from '../Header';

export interface GameResultsProps {
  timeTotal: number;
  clicksTotal: number;
  restartHandler: MouseEventHandler<HTMLButtonElement>;
}

const GameResults = ({ timeTotal, clicksTotal, restartHandler }: GameResultsProps) => (
  <>
    <Header>
      <h1 className="mb-6 text-4xl font-extrabold leading-none">Congratulations</h1>
      <p className="text-lg">You won the game!</p>
    </Header>
    <div id="results" className="mx-auto my-0 mt-[50px]">
      <p className="mb-2.5">
        Total Time: <strong>{timeTotal} seconds</strong>
      </p>
      <p>
        Total Clicks: <strong>{clicksTotal} clicks</strong>
      </p>
    </div>
    <RollDiceButton onClick={restartHandler}>Start again</RollDiceButton>
  </>
);
export default GameResults;
