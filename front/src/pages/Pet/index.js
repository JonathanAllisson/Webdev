import React, {useEffect, useState} from 'react';
import api from '../../services/api';

import { Container, Panel, Gallery, Column, Comments } from './styles';
import { useParams } from 'react-router-dom';

function Pet() {

    const { id } = useParams();
    const [pet, setPet] = useState({});

    useEffect(() => {
        async function loadPet(){
            const animal = await api.get(`/post/${id}`);
            setPet(animal.data);
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
                <div>
                    <h2>{pet.title}</h2>
                    <p>{pet.description}</p>
                    <h3>{pet.city}</h3>
                    <h4>{pet.uf}</h4>
                </div>
            </Panel>
            <Comments>
                <h1>Comentários:</h1>
                <textarea 
                    className="textComment"
                    type="text"
                    placeholder="Digite seu comentario"
                />
                <button>Comentar</button>
            </Comments>
        </Container>
    )
}

export default Pet;