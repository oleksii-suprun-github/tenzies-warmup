import { render } from '@testing-library/react';
import GameResults, { GameResultsProps } from '../GameResults';
import GameResultsMockProps from './__mocks__/GameResultsProps.json';

describe('GameResults', () => {
  it('should render a component with default props', () => {
    const { container } = render(<GameResults {...(GameResultsMockProps as GameResultsProps)} />);
    expect(container).toMatchSnapshot();
  });
});
