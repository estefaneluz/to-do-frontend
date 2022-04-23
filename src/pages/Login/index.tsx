import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <>
      <form name="login">
        <Input label="Seu e-mail:" type="email" name="email" />
        <Input label="Sua senha:" type="password" name="password" />
        <Link to="/send-email" data-testid="send-email-link">
          Esqueci minha senha
        </Link>
        <Button text="Login" />
      </form>
      <p>
        Não te uma conta?{' '}
        <Link to="/sign-up" data-testid="sign-up-link">
          Cadastre-se, é grátis!
        </Link>
      </p>
    </>
  );
};

export default Login;
