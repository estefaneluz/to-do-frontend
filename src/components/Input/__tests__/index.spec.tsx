import Input, { Props } from '../index';
import { render, screen } from '@testing-library/react';

describe('Input', () => {
  it('should render a Input component', () => {
    render(<Input type="text" label="Nome do usuário" name="name" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render props correctly', () => {
    const props: Props = {
      label: 'Senha',
      type: 'password',
      name: 'password',
    };
    render(<Input type={props.type} label={props.label} name={props.name} />);

    expect(screen.getByLabelText(props.label)).toBeInTheDocument();
    expect(screen.getByTestId('input')).toHaveAttribute('type', props.type);
    expect(screen.getByTestId('input')).toHaveAttribute('name', props.name);
  });
});
