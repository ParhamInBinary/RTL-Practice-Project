import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Drink } from '../src/App';
import { ListComponent } from '../src/components';

const mockDrinks: Drink[] = [];
const mockSetDrinks = () => {};

describe('ListComponent', () => {
  it('should render empty list', () => {
    render(<ListComponent drinks={mockDrinks} setDrinks={mockSetDrinks} />);
  });

  const listElement = screen.getByText(/No drinks added/i);

  expect(listElement).toBeInTheDocument();
});
