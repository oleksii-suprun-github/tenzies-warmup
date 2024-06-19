import { render, screen } from '@testing-library/react';
import Board, { BoardProps } from '../Board';
import BoardMockProps from './__mocks__/BoardProps.json';

describe('Board', () => {
  it('should render a component with default props', () => {
    const { container } = render(<Board {...(BoardMockProps as BoardProps)} />);
    expect(container).toMatchSnapshot();
  });
  it('should render a correct amount of dice', () => {
    render(<Board {...(BoardMockProps as BoardProps)} />);
    const headlineText = screen.getByTestId('board-headline');
    expect(headlineText).toHaveTextContent('10');
  });
  describe('getRollDiceBtnLabel', () => {
    it('should render "Roll" when game is ongoing', () => {
      render(<Board {...(BoardMockProps as BoardProps)} />);

      const rollDiceButtonText = screen.getByTestId('roll-dice-button');

      expect(rollDiceButtonText).toHaveTextContent('Roll');
    });
    it('should render "Start the game" when the game is not started yet', () => {
      let localProps = {
        ...BoardMockProps,
        isGameStarted: false,
      };
      render(<Board {...(localProps as BoardProps)} />);

      const rollDiceButtonText = screen.getByTestId('roll-dice-button');

      expect(rollDiceButtonText).toHaveTextContent('Start the game');
    });
    it('should render "Play again" when the game won', () => {
      let localProps = {
        ...BoardMockProps,
        isGameStarted: true,
        isGameWon: true,
      };
      render(<Board {...(localProps as BoardProps)} />);

      const rollDiceButtonText = screen.getByTestId('roll-dice-button');

      expect(rollDiceButtonText).toHaveTextContent('Play again');
    });
  });
});
