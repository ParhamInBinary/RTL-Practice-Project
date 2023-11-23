import { render, screen, waitFor } from '@testing-library/react';
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

const mockAddDrinkFn = async () => {
  const user = userEvent.setup();

  const inputElement = screen.getByLabelText(/Search drink/i);
  expect(inputElement).toHaveValue('');
  await user.type(inputElement, mockDrink.title);
  await waitFor(() => {
    expect(inputElement).toHaveValue(mockDrink.title);
  });

  const addBtnElement = screen.getByRole('button', { name: 'Add' });
  await user.click(addBtnElement);

  const drink = await waitFor(() => screen.findByTestId('drink'));

  expect(drink).toBeInTheDocument();
};

describe('ListComponent', () => {
  it('should render empty list', () => {
    render(<ListComponent drinks={mockDrinks} setDrinks={mockSetDrinks} />);
    const listElement = screen.getByTestId('list-component');
    expect(listElement).toBeInTheDocument();
  });

  it('should render drink in list when added', async () => {
    render(<App />);

    mockAddDrinkFn();
  });

  //   it.only('should delete drink', async () => {
  //     render(<App />);
  //     const user = userEvent.setup();

  //     mockAddDrinkFn();

  //     await waitFor(() => {
  //       const drinks = screen.queryAllByTestId('drink');
  //       console.log('------drinks', drinks)
  //     });
  //     // const deleteBtn = screen.getByRole('img', { name: /Delete/i });
  //     // expect(deleteBtn).toBeInTheDocument();
  //     // await user.click(deleteBtn)
  //   });

  it('should render Clear all btn', () => {
    render(<ListComponent drinks={mockDrinks} setDrinks={mockSetDrinks} />);
    const clearAllBtn = screen.getByRole('button', { name: 'Clear all' });
    expect(clearAllBtn).toBeInTheDocument();
  });

  it('should clear all drinks from list on click', async () => {
    render(<App />);
    const user = userEvent.setup();

    mockAddDrinkFn();

    const clearAllBtn = screen.getByRole('button', { name: 'Clear all' });
    expect(clearAllBtn).toBeInTheDocument();
    await user.click(clearAllBtn);

    await waitFor(() => {
      const drinks = screen.queryAllByTestId('drink');
      expect(drinks).toHaveLength(0);
    });
  });
});
