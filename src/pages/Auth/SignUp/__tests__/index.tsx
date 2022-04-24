import SignUp from '../index';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('SignUp page', () => {
  it('should render a form', () => {
    render(
      <MemoryRouter initialEntries={['/sign-up']}>
        <SignUp />
      </MemoryRouter>,
    );
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('should redirect to Login page correctly', () => {
    const history = createMemoryHistory();
    const initialRoute = '/sign-up';
    const loginRoute = '/';

    render(
      <Router navigator={history} location={initialRoute}>
        <SignUp />
      </Router>,
    );

    history.push('/sign-up');
    expect(history.location.pathname).toEqual(initialRoute);

    const link = screen.getByTestId('redirect');
    fireEvent.click(link);

    // mudança futura: testar se a página foi renderizada ao invés da mudança de rota
    expect(history.location.pathname).toEqual(loginRoute);
  });
});
