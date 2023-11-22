import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '../src/App';

describe('App', () => {
  it('should render header', () => {
    render(<App />);

    const header = screen.getByText(/Mark's To-drink list/i);

    expect(header).toBeInTheDocument();
  });
});
