import React from 'react';

export interface Props {
  type: 'text' | 'email' | 'password';
  label: string;
  name: string;
}

const Input: React.FC<Props> = ({ type, label, name }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} data-testid="input" />
    </div>
  );
};

export default Input;
