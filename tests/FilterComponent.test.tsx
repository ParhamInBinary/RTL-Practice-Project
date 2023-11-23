import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';

import { DRINKS_FILTER, FilterComponent } from '../src/components';

const MockFilterComponent = () => {
  const [filter, setFilter] = useState(DRINKS_FILTER.ALL);

  return (
    <>
      <FilterComponent filter={filter} setFilter={setFilter} />
    </>
  );
};

describe('FilterComponent', () => {
  it('should render All filter option', () => {
    render(<MockFilterComponent />);
    const allCheckbox = screen.getByText(DRINKS_FILTER.ALL);
    expect(allCheckbox).toBeInTheDocument();
  });

  it('should render Completed filter option', () => {
    render(<MockFilterComponent />);
    const completedCheckbox = screen.getByText(DRINKS_FILTER.COMPLETED);
    expect(completedCheckbox).toBeInTheDocument();
  });

  it('should render Non-completed filter option', () => {
    render(<MockFilterComponent />);
    const noncompletedCheckbox = screen.getByText(DRINKS_FILTER.NON_COMPLETED);
    expect(noncompletedCheckbox).toBeInTheDocument();
  });
});
