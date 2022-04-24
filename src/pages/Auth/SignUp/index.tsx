import React from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';
import { Form, Redirect } from '../styles';

const SignUp: React.FC = () => {
  return (
    <>
      <Form name="sign-up">
        <Input label="Seu nome:" type="text" name="name" />
        <Input label="Seu e-mail:" type="email" name="email" />
        <Input label="Crie sua senha:" type="password" name="password" />
        <Input
          label="Digite sua senha novamente:"
          type="password"
          name="repeat-password"
        />
        <Button text="Concluir cadastro" />
      </Form>
      <Redirect>
        Já tem uma conta?{' '}
        <Link to="/" data-testid="redirect">
          Faça o login.
        </Link>
      </Redirect>
    </>
  );
};

export default SignUp;
