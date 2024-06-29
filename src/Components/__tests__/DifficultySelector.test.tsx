import { render, screen, fireEvent } from '@testing-library/react';
import DifficultySelector from '../DifficultySelector';

describe('DifficultySelector', () => {
  it('should render correctly', () => {
    const difficultyHandler = vi.fn();
    render(<DifficultySelector difficultyHandler={difficultyHandler} />);

    expect(screen.getByText('Please choose the difficulty:')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Easy' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Normal' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Hard' })).toBeInTheDocument();
  });

  it('should call difficultyHandler with the correct value on change', () => {
    const difficultyHandler = vi.fn();
    render(<DifficultySelector difficultyHandler={difficultyHandler} />);

    const selectElement = screen.getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: 'easy' } });
    expect(difficultyHandler).toHaveBeenCalledWith('easy');

    fireEvent.change(selectElement, { target: { value: 'normal' } });
    expect(difficultyHandler).toHaveBeenCalledWith('normal');

    fireEvent.change(selectElement, { target: { value: 'hard' } });
    expect(difficultyHandler).toHaveBeenCalledWith('hard');
  });
});
