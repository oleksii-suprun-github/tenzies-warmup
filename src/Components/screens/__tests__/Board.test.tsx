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
});
