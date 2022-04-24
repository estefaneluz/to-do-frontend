import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 60%;
  margin: 0 auto;

  padding-top: 10vh;
  row-gap: 16px;
`;

export const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 128px 1fr;
  column-gap: 32px;
  row-gap: 16px;
  align-items: center;

  h2,
  p,
  button,
  hr {
    grid-column: 2;
  }

  h2 {
    font-size: 2.5em;
    font-weight: 400;
  }

  p {
    span {
      color: var(--secondary-color);
      font-weight: 700;
    }
  }
`;

export const ImageUser = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-color: var(--white-color);

  :hover {
    cursor: pointer;
  }
`;

export const NewTask = styled.button`
  background-color: var(--light-color);
  border: 1px solid var(--secondary-color);
  color: var(--text-color);

  text-align: left;
  border-radius: 4px;
  padding: 8px 16px;

  cursor: pointer;
`;
