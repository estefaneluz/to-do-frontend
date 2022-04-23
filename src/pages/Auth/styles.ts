import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Title = styled.h1`
  padding: 75px 0 0 75px;
  color: var(--clean-white-color);
  width: 474px;
  font-weight: 700;
  font-size: 2.9em;
`;

export const LeftWrapper = styled.div`
  width: 45%;
  padding-right: 40px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary-color);

  img {
    width: 85%;
    position: relative;
    bottom: 0;
  }
`;

export const RightWrapper = styled.div`
  width: 55%;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-evenly;

  height: 100vh;
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 5vh;

  img {
    width: 88px;
    height: 74px;
  }
`;

export const WelcomeText = styled.h2`
  color: var(--primary-color);
  font-size: 2em;
  font-weight: 400;
`;
