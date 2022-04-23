import React from 'react';

export interface Props {
  text: string;
  type?: 'submit' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ text, type, onClick }) => {
  return (
    <button type={type || 'button'} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
