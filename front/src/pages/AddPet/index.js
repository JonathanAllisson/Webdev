import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../services/api';

import { FaCamera } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';

import { Container, Form, Field, FieldGroup } from './styles';

function AddPet({ history }) {

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [city, setCity] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState(null);
  const [vaccinated, setVaccinated] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      const Ufinitials = response.data.map(uf => uf.sigla);
      setUfs(Ufinitials);
    })
  },[]);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);


  async function handleSubmit(e){
    e.preventDefault();

    if(selectedUf && city && title && description && type && vaccinated && file){
      const data = new FormData();
      data.append('title', title);
      data.append('description', description);
      data.append('type', type);
      data.append('vaccinated', vaccinated);
      data.append('city', city);
      data.append('uf', selectedUf);
      data.append('file', file);

      console.log(type, vaccinated);
      await api.post('post', data);
      history.push('/');
    } else{
      console.log('Preencha todos os campos');
    }
  }

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h1>Cadastro de Pet para adoção</h1>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <Field>
            <label htmlFor="title">Titulo da publicação</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="Descrição">Descreva sobre o pet</label>
            <textarea
              type="text"
              name="title"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Field>

          <FieldGroup>
            <div>
              <label htmlFor="typePet">Tipo de Pet</label>
              <select
                name="typePet"
                id="typePet"
                value={type}
                onChange={e => setType(e.target.value)}
                >
                <option value={'0'} disabled selected>Selecione um tipo de pet</option>
                <option value={'dog'}>Cachorro</option>
                <option value={'cat'}>Gato</option>
              </select>
            </div>
            <div>
              <label htmlFor="vaccinated">Possui carteira de vacinação?</label>
              <select
                name="typePet"
                id="typePet"
                value={vaccinated}
                onChange={e => setVaccinated(e.target.value)}
                >
                <option value={'0'} disabled selected>Selecione uma opção</option>
                <option value={true}>Possui</option>
                <option value={false}>Não possui</option>
              </select>
            </div>
          </FieldGroup>

          <Field>
            <label htmlFor="imgD">Foto do pet</label>
            <input
              type="file"
              id="img"
              onChange={e => setFile(e.target.files[0])}
            />
            <label htmlFor="img" id="imgLabel"> <FaCamera /> </label>
          </Field>
        </fieldset>

        {file ?
          <FiCheckCircle className="check" />
         :
          null
        }

        <fieldset>
          <legend>
            <h2>Localidade</h2>
          </legend>
          <FieldGroup>
            <div>
              <label htmlFor="uf">Estado (UF)</label>
              <select
                name="uf"
                id="uf"
                value={selectedUf}
                onChange={e => setSelectedUf(e.target.value)}
                >
                <option value="0">Selecione uma UF</option>
                {ufs.map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="city">Cidade</label>
              <select
                name="city"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                >
                <option value="0">Selecione uma cidade</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </FieldGroup>
        </fieldset>
        <button>Criar publicação</button>
      </Form>
    </Container>
  )
}

export default AddPet;
