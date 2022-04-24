import styled from 'styled-components';

export const Card = styled.div`
  margin-left: 160px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 16px;

  background-color: var(--light-color);
  border: 1px solid var(--secondary-color);
  border-radius: 4px;

  h3 {
    font-weight: 400;
    font-size: 1.8em;
    color: var(--text-color);
  }
`;

export const Status = styled.select`
  border-radius: 4px;
  padding: 8px;

  color: var(--clean-white-color);
  background-color: var(--primary-color);
`;
