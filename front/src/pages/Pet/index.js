import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import dateFormat from 'dateformat';
import api from '../../services/api';
import CommentsArea from '../../components/CommentsArea';

import { Container, Panel, Gallery, Column, Data} from './styles';

import { BiArrowToBottom } from 'react-icons/bi';
import { RiWhatsappLine } from 'react-icons/ri';


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
                <Data>
                    <span>{dateFormat(pet.created_at, "dd/mm/yyyy")}</span>
                    <h2>{pet.title}</h2>
                    <h3>Descrição:</h3>
                    <p>{pet.description}</p>
                    <div>
                        <h3>Cadastrado por:</h3>
                        <h3>Cidade:</h3>
                    </div>
                    <div>
                      <span>{pet.name}</span>
                      <span>{pet.city} - {pet.uf}</span>
                    </div>
                    <a href={`https://api.whatsapp.com/send?phone=55${pet.whatsapp}`}>
                      Entrar em contato pelo wpp
                      <RiWhatsappLine />
                    </a>
                    <p className="dxc">Ou deixe um comentário</p>
                    <BiArrowToBottom />
                </Data>
            </Panel>
          <CommentsArea id={id} />
        </Container>
    );
}

export default Pet;
