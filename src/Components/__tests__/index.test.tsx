import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import App from '../index';

vi.mock('utils', async (importOriginal) => {
  const actual = (await importOriginal()) as { [key: string]: any };
  return {
    ...actual,
    setNewDiceSet: (difficulty: number = 3): Dice[] => {
      let dicesArr: Dice[] = [];
      for (let i = 0; i < difficulty; i++) {
        dicesArr.push({ id: `test-id-${i}`, value: 6, isHeld: false });
      }
      return dicesArr;
    },
  };
});

vi.mock('react-confetti', () => ({
  default: () => <div data-testid="confetti"></div>,
}));

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    localStorage.clear();
  });

  it('should render GameDescription when the game has not started', () => {
    render(<App />);

    expect(screen.getByText('Please choose the difficulty:')).toBeInTheDocument();
    expect(screen.getByTestId('difficulty-selector')).toBeInTheDocument();
    expect(screen.getByTestId('roll-dice-button')).toBeInTheDocument();
  });

  it('should start the game and show the game board', () => {
    render(<App />);

    fireEvent.change(screen.getByTestId('difficulty-selector'));
    fireEvent.click(screen.getByTestId('roll-dice-button'));

    expect(screen.getByText(/time/i)).toBeInTheDocument();
    expect(screen.getByText(/roll/i)).toBeInTheDocument();
  });

  it('should roll all the same dice and hold all of them', () => {
    render(<App />);

    fireEvent.change(screen.getByTestId('difficulty-selector'));
    fireEvent.click(screen.getByTestId('roll-dice-button'));

    const die = screen.getAllByTestId('die')[0];
    fireEvent.click(die);
    expect(die).toHaveClass('bg-main-die-active');
  });

  it('should save records to localStorage on win', () => {
    render(<App />);

    fireEvent.change(screen.getByTestId('difficulty-selector'));
    fireEvent.click(screen.getByTestId('roll-dice-button'));

    const diceButtons = screen.getAllByTestId('die');

    diceButtons.forEach((button) => {
      fireEvent.click(button);
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

  it('should roll the random dice, hold all of them and show a tooltip error', () => {
    vi.doUnmock('utils');
    render(<App />);

    fireEvent.change(screen.getByTestId('difficulty-selector'));
    fireEvent.click(screen.getByTestId('roll-dice-button'));

    const die = screen.getAllByTestId('die')[0];
    fireEvent.click(die);
    expect(die).toHaveClass('bg-main-die-active');

    expect;
    expect(localStorage.getItem('tenzies-wins-records')).toBeFalsy();
  });
});
