import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import { Form } from './styles';

function FormLoginRegister({ history, inputs, title, secondOptionText, secondOptionLink, buttonSubmitText, submitFunction, redirect }) {

  const [states, setStates] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    let initialValues = {};
    inputs.forEach(element => ( initialValues[element] = "" ));
    setStates(initialValues);
  },[]);

  const handleChange = (e) => {
    setError('');
    let id = e.target.id;
    let value = e.target.value;
    setStates((oldStates) => ({...oldStates, [id]: value}))
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    let okSubmit = true
    for(let x in states){
      if(states[x] === ""){
        okSubmit = false
        break
      }
    }
    if(okSubmit){
      try{
        await submitFunction(states);
        history.push(redirect);
      }catch(err){
        console.log(err);
        setError('Verifique se seus dados estão corretos')
      }
    }
    else if(!okSubmit){
      setError('Preencha todos os dados')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        {error ? <span>{error}</span> : null}
        {inputs.map(i => (
          <div key={i}>
            <label>{i}</label>
              <input
                id={i}
                type={ i === 'Digite sua senha' ? 'password' : 'text'}
                onChange={handleChange}
                />
          </div>
        ))}
        <button>{buttonSubmitText}</button>
        <Link to={secondOptionLink}>{secondOptionText}</Link>
    </Form>
  );
}

export default FormLoginRegister;
