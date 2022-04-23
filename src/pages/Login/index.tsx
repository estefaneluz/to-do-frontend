import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
const Login: React.FC = () => {
  return (
    <>
      <h2>Bem-vindo de volta!</h2>
      <form name="login">
        <Input label="Seu e-mail:" type="email" name="email" />
        <Input label="Sua senha:" type="password" name="password" />
        <Link to="/send-email">Esqueci minha senha</Link>
        <Button text="Login" />
      </form>
    </>
  );
};

export default Login;
