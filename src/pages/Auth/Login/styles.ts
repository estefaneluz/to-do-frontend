import styled from 'styled-components';

export const Form = styled.form`
  width: 90%;
  max-width: 512px;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
`;

export const PasswordWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  a {
    align-self: flex-end;
  }
`;

export const SignUp = styled.p`
  color: var(--text-color);
  text-align: center;

  a {
    color: var(--text-color);
    font-weight: 700;
    text-decoration: none;
  }
`;
