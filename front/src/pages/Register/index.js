import React, { useContext } from 'react';
import FormLoginRegister from '../../components/FormLoginRegister';

import { Context } from '../../context/AuthProvider';

import { Container } from './styles';

function Register({ history }) {

  const { signup } = useContext(Context);

  return (
    <Container>
      <FormLoginRegister
        inputs = {['Digite seu nome', 'Digite seu email', 'Digite o número de Whatsapp', 'Digite sua senha']}
        title={'Cadastro'}
        secondOptionText={"Clique aqui se já possui uma conta"}
        secondOptionLink={'/login'}
        buttonSubmitText={'Cadastrar'}
        submitFunction={signup}
        history={history}
        redirect={'/login'}
      />
    </Container>
  )
}

export default Register;
