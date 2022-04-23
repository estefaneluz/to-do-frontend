import React from 'react';
import logo from '../../assets/Logo.svg';
import authImage from '../../assets/auth-image.svg';
import * as S from './styles';

interface Props {
  children?: React.ReactNode;
}

const Auth: React.FC<Props> = ({ children }) => {
  return (
    <S.Container data-testid="auth">
      <S.LeftWrapper>
        <S.Title>Crie e gerencie suas tarefas com o TodoApp.</S.Title>
        <img
          src={authImage}
          alt="Ilustração de uma pessoa com uma lista de tarefas ao fundo."
        />
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.WelcomeWrapper>
          <img src={logo} alt="logo do To Do App" />
          <S.WelcomeText>Bem-vindo!</S.WelcomeText>
        </S.WelcomeWrapper>
        {children}
      </S.RightWrapper>
    </S.Container>
  );
};

export default Auth;
