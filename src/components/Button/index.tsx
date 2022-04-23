import React from 'react';
import { Button as StyledButton } from './styles';

export interface Props {
  text: string;
  type?: 'submit' | 'reset';
  onClick?: () => void;
  width?: string;
}

const Button: React.FC<Props> = ({ text, type, onClick, ...rest }) => {
  return (
    <StyledButton type={type || 'button'} onClick={onClick} {...rest}>
      {text}
    </StyledButton>
  );
};

export default Button;
