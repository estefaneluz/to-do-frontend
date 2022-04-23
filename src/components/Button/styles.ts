import styled from 'styled-components';

interface ButtonProps {
  width?: string;
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  text-transform: uppercase;
  color: var(--white-color);
  font-weight: bold;

  width: ${(props) => props.width || '100%'};

  padding: 22px;
  background-color: var(--primary-color);
  border-radius: 4px;
  border: unset;
`;
