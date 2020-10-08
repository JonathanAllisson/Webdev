import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import dateFormat from 'dateformat';
import api from '../../services/api';
import { Context } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

import { Container, Panel, Gallery, Column, Comments, Dados, Comment } from './styles';

import { BiEdit, BiTrashAlt, BiArrowToBottom } from 'react-icons/bi';
import { RiWhatsappLine } from 'react-icons/ri';


function Pet() {
    const { authenticated } = useContext(Context);

    const { id } = useParams();
    const history = useHistory();
    const [pet, setPet] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        let animal;
        let c;
        async function loadPet() {
            try {
                animal = await api.get(`/post/${id}`);
                setPet(animal.data);
                c = await api.get(`/comment/${id}`);
                setComments(c.data);
            } catch (err) {
                history.push('/');
            }
        }

        loadPet();
    }, [comments]);

    function handlesubmit(){
      if(!authenticated){
        toast.error('É necessário estar logado para comentar');
      }

    }

    return (
        <Container>
            <Panel>
                <Column>
                    <Gallery>
                        <img alt={pet.id} src={`http://localhost:3333/files/${pet.img}`} />
                    </Gallery>
                </Column>
                <Dados>
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
                </Dados>
            </Panel>
            <Comments>
                <h1>Comentários:</h1>
                <textarea placeholder="Digite seu comentário" />
                <button onClick={() => handlesubmit()}>Comentar</button>
                {comments.map((c) => (
                  <Comment key={c.id}>
                    <div className="icon"><span>{c.name[0]}</span></div>
                    <div className="comment">
                      <div className="actions">
                        <BiEdit />
                        <BiTrashAlt />
                      </div>
                      <div className="actions">
                        <h4>{c.name}</h4>
                        <p>{c.content}</p>
                      </div>
                    </div>
                  </Comment>
                ))}
            </Comments>
        </Container>
    );
}

export default Pet;
