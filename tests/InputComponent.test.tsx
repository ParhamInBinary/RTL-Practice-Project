import { fireEvent, render, screen } from '@testing-library/react';
import { HttpResponse, http } from 'msw';
import { describe, expect, it } from 'vitest';

import { InputComponent } from '../src/components';

// Create a mock function for addDrinkToList
const mockAddDrinkToList = () => {};

const handlers = [
  http.post('/auth', () => {
    return HttpResponse.json({
      drink: {
        title: 'drink1',
        completed: false,
      },
    });
  }),
];

describe('InputComponent', () => {
  it('should render searchbar', () => {
    render(<InputComponent addDrinkToList={mockAddDrinkToList} />);

    const inputElement = screen.getByLabelText(/Search drink/i);

    expect(inputElement).toBeInTheDocument();
  });

  it('should render add btn', () => {
    render(<InputComponent addDrinkToList={mockAddDrinkToList} />);

    const addBtnElement = screen.getByRole('button', { name: 'Add' });

    expect(addBtnElement).toBeInTheDocument();
  });

  it('should reset searchbar after drink is added', async () => {
    render(<InputComponent addDrinkToList={mockAddDrinkToList} />);

    const inputElement = await screen.findByLabelText(/Search drink/i);
    const addBtnElement = screen.getByRole('button', { name: 'Add' });
    fireEvent.click(addBtnElement);

    expect(inputElement).toHaveValue('');
  });
});
