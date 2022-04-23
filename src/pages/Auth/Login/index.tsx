import React from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Login: React.FC = () => {
  return (
    <>
      <S.Form name="login">
        <Input label="Seu e-mail:" type="email" name="email" />
        <S.PasswordWrapper>
          <Input label="Sua senha:" type="password" name="password" />
          <Link to="/send-email" data-testid="send-email-link">
            Esqueci minha senha
          </Link>
        </S.PasswordWrapper>
        <Button text="Login" />
      </S.Form>
      <S.SignUp>
        Não tem uma conta?{' '}
        <Link to="/sign-up" data-testid="sign-up-link">
          Cadastre-se, é grátis!
        </Link>
      </S.SignUp>
    </>
  );
};

export default Login;
