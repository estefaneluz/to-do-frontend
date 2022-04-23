import Auth from '../index';
import { render, screen } from '@testing-library/react';

describe('Commom auth page structure', () => {
  it('should render commom auth page correctly', () => {
    render(<Auth />);
    expect(screen.getByTestId('auth')).toBeInTheDocument();
  });

  it('should render childrens correctly', () => {
    render(
      <Auth>
        <div data-testid="children">Children</div>
      </Auth>,
    );
    expect(screen.getByTestId('children')).toBeInTheDocument();
  });
});
