import React, { useContext } from 'react';
import FormLoginRegister from '../../components/FormLoginRegister';

import { Context } from '../../context/AuthProvider';

import { Container } from './styles';

function Login({ history }) {

  const { signin } = useContext(Context);

  return (
    <Container>
      <FormLoginRegister
        inputs = {['Digite seu email', 'Digite sua senha']}
        title={'Login'}
        secondOptionText={"Clique aqui para se registrar"}
        secondOptionLink={'/register'}
        buttonSubmitText={'Logar'}
        submitFunction={signin}
        history={history}
        redirect={'/'}
      />
    </Container>
  )
}

export default Login;
