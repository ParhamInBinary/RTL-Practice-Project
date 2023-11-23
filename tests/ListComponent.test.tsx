import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import App, { Drink } from '../src/App';
import { ListComponent } from '../src/components';

const mockDrinks: Drink[] = [];
const mockSetDrinks = () => {};

const mockDrink = { title: 'Drink', completed: false };
const mockDrinkList = [
  { title: 'Drink1', completed: false },
  { title: 'Drink2', completed: false },
  { title: 'Drink3', completed: false },
  { title: 'Drink4', completed: false },
];

const mockAddDrinkFn = () => {
    
}

describe('ListComponent', () => {
  it('should render empty list', () => {
    render(<ListComponent drinks={mockDrinks} setDrinks={mockSetDrinks} />);
    const listElement = screen.getByTestId('list-component');

    expect(listElement).toBeInTheDocument();
  });

  it('should render drink in list when added', async () => {
    render(<App />);
    const user = userEvent.setup();

    const inputElement = screen.getByLabelText(/Search drink/i);
    expect(inputElement).toHaveValue('');
    await user.type(inputElement, mockDrink.title);
    expect(inputElement).toHaveValue(mockDrink.title);

    const addBtnElement = screen.getByRole('button', { name: 'Add' });
    await user.click(addBtnElement);

    const drinks = await screen.findAllByText(/Drink/i);

    expect(drinks).toHaveLength(drinks.length);
  });
});
