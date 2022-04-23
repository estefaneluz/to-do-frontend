import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  font-size: 1.2em;
  width: inherit;
`;

export const Input = styled.input`
  padding: 23px;
  background-color: var(--light-color);
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  font-size: 0.9em;
`;
