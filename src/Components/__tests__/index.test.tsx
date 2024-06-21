import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from 'components';

jest.mock('utils', () => ({
  ...jest.requireActual('utils'),
  setNewDiceSet: (difficulty: number = 3): Dice[] => {
    let dicesArr: Dice[] = [];
    for (let i = 0; i < difficulty; i++) {
      dicesArr.push({ id: `test-id-${i}`, value: 6, isHeld: false });
    }
    return dicesArr;
  },
}));

jest.mock(
  'react-confetti',
  () =>
    function Confetti() {
      return <div data-testid="confetti"></div>;
    },
);

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render GameDescription when the game has not started', () => {
    render(<App />);

    expect(screen.getByText('Please choose the difficulty:')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start the game/i })).toBeInTheDocument();
  });

  it('should start the game and show the game board', () => {
    render(<App />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'easy' } });
    fireEvent.click(screen.getByRole('button', { name: /start the game/i }));

    expect(screen.getByText(/time/i)).toBeInTheDocument();
    expect(screen.getByText(/roll/i)).toBeInTheDocument();
  });

  it('should roll the dice and hold a die', () => {
    render(<App />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'easy' } });
    fireEvent.click(screen.getByRole('button', { name: /start the game/i }));

    const die = screen.getAllByRole('button')[0];
    fireEvent.click(die);
    expect(die).toHaveClass('held');
  });

  it('should save records to localStorage on win', () => {
    render(<App />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'easy' } });
    fireEvent.click(screen.getByRole('button', { name: /start the game/i }));

    const diceButtons = screen.getAllByRole('button');

    diceButtons.forEach((button) => {
      fireEvent.click(button);
    });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByTestId('confetti')).toBeInTheDocument();
    expect(localStorage.getItem('tenzies-wins-records')).toBeTruthy();
  });

  it('should load records from localStorage on start', () => {
    localStorage.setItem(
      'tenzies-wins-records',
      JSON.stringify([
        {
          id: 'test-id',
          date: '1717013873000',
          difficultyLabel: 'easy',
          gameTime: 9,
          gameClicks: 5,
        },
      ]),
    );

    render(<App />);

    expect(screen.getByText(/total clicks/i)).toBeInTheDocument();
  });
});
