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

  it('should redirect to send email page when forgot password link is clicked', () => {
    const history = createMemoryHistory();
    const initialRoute = '/';
    const sendEmailRoute = '/send-email';
    render(
      <Router navigator={history} location={initialRoute}>
        <Login />
      </Router>,
    );
    expect(history.location.pathname).toEqual(initialRoute);

    const link = screen.getByTestId('send-email-link');
    fireEvent.click(link);

    // mudança futura: testar se a página foi renderizada ao invés da mudança de rota
    expect(history.location.pathname).toEqual(sendEmailRoute);
  });

  it('should redirect to sign up page correctly', () => {
    const history = createMemoryHistory();
    const initialRoute = '/';
    const sendEmailRoute = '/sign-up';
    render(
      <Router navigator={history} location={initialRoute}>
        <Login />
      </Router>,
    );
    expect(history.location.pathname).toEqual(initialRoute);

    const link = screen.getByTestId('sign-up-link');
    fireEvent.click(link);

    // mudança futura: testar se a página foi renderizada ao invés da mudança de rota
    expect(history.location.pathname).toEqual(sendEmailRoute);
  });
});
