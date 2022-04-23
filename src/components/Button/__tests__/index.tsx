import Button from '../index';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button', () => {
  const onClick = jest.fn();

  it('should render a button component', () => {
    render(<Button text="Clique aqui." />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call onClick when called', () => {
    render(<Button text="Clique aqui." onClick={onClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });
});
