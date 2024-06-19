import { render, screen } from '@testing-library/react';
import GameDescription, { GameDescriptionProps } from '../GameDescription';
import GameDescriptionMockProps from './__mocks__/GameDescriptionProps.json';

describe('GameDescription', () => {
  let defaultProps = {
    startHandler: () => {},
    difficultyHandler: () => {},
  };

  it('should render a component without records table', () => {
    const { container } = render(<GameDescription {...(defaultProps as GameDescriptionProps)} />);
    expect(container).toMatchSnapshot();
  });

  it('should render a component with records table', () => {
    let localProps = {
      ...defaultProps,
      ...GameDescriptionMockProps,
    };
    const { container } = render(<GameDescription {...(localProps as GameDescriptionProps)} />);

    const recordsList = screen.getByTestId('records-list');

    expect(container).toMatchSnapshot();
    expect(recordsList).toBeInTheDocument();
  });
});
