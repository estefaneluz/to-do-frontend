import Login from '../index';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Login page', () => {
  it('should render a form', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Login />
      </MemoryRouter>,
    );
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('should redirect to send email page when forgot password link is clicked', async () => {
    const history = createMemoryHistory();

    render(
      <Router navigator={history} location={'/'}>
        <Login />
      </Router>,
    );
    expect(history.location.pathname).toEqual('/');

    const link = screen.getByRole('link');
    fireEvent.click(link);

    expect(history.location.pathname).toEqual('/send-email');
  });
});
