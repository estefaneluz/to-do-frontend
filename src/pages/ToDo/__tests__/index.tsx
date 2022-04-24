import ToDo from '../index';
import { render, screen } from '@testing-library/react';

describe('ToDo Page', () => {
  it('should render ToDo page correctly', () => {
    render(<ToDo />);
    expect(screen.getByTestId('to-do')).toBeInTheDocument();
  });
});
