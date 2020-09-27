import React, {useEffect, useState} from 'react';
import api from '../../services/api';

import { Container, Panel, Gallery, Column, Comments, Dados } from './styles';
import { useParams, useHistory } from 'react-router-dom';

function Pet() {

    const { id } = useParams();
    const history = useHistory();
    const [pet, setPet] = useState({});

    useEffect(() => {
        var animal;
        async function loadPet(){
            try{
                animal = await api.get(`/post/${id}`);
                setPet(animal.data);
            }catch(err){
                history.push('/');
            }
        }

        loadPet();
    },[])

  return(
        <Container>
            <Panel>
                <Column>
                    <Gallery>
                        <img alt={pet.id} src={`http://localhost:3333/files/${pet.img}`} />
                    </Gallery>
                </Column>
                <Dados>
                    <h2>{pet.title}</h2>
                    <p>{pet.description}</p>
                    <div>
                        <h3>Cidade: </h3>
                        <h3>{pet.city}</h3>
                        <span>-</span>
                        <h3>{pet.uf}</h3>
                    </div>
                </Dados>
            </Panel>
            <Comments>
                <h1>Comentários:</h1>
                <textarea 
                    placeholder="Digite seu comentário"
                />
                <button>Comentar</button>
            </Comments>
        </Container>
    )
}

export default Pet;