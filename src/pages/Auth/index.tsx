import React from 'react';
import logo from '../../assets/Logo.svg';
import authImage from '../../assets/auth-image.svg';

interface Props {
  children?: React.ReactNode;
}

const Auth: React.FC<Props> = ({ children }) => {
  return (
    <div data-testid="auth">
      <div>
        <h1>Crie e gerencie suas tarefas com o TodoApp.</h1>
        <img
          src={authImage}
          alt="Ilustração de uma pessoa com uma lista de tarefas ao fundo."
        />
      </div>
      <div>
        <img src={logo} alt="logo do To Do App" />
        <h2>Bem-vindo!</h2>
        {children}
      </div>
    </div>
  );
};

export default Auth;
