import React, { useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';

import PublicationData from '../../components/PublicationData';
import CommentsArea from '../../components/CommentsArea';

import { Container, Panel, Gallery, Column} from './styles';

function Pet() {

    const { id } = useParams();
    const history = useHistory();
    const [pet, setPet] = useState({});

    useEffect(() => {
        let animal;
        async function loadPet() {
            try {
                animal = await api.get(`/post/${id}`);
                setPet(animal.data);
            } catch (err) {
                history.push('/');
            }
        }

        loadPet();
    }, [id]);

    return (
        <Container>
            <Panel>
                <Column>
                    <Gallery>
                        <img alt={pet.id} src={`http://localhost:3333/files/${pet.img}`} />
                    </Gallery>
                </Column>
                <PublicationData pet={pet} />
            </Panel>
          <CommentsArea id={id} />
        </Container>
    );
}

export default Pet;
