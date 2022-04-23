import React from 'react';
import { Container, Input as StyledInput } from './styles';
export interface Props {
  type: 'text' | 'email' | 'password';
  label: string;
  name: string;
}

const Input: React.FC<Props> = ({ type, label, name }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <StyledInput type={type} name={name} id={name} data-testid="input" />
    </Container>
  );
};

export default Input;
