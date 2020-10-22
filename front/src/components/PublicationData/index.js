import React from 'react';
import dateFormat from 'dateformat';

import { BiArrowToBottom } from 'react-icons/bi';
import { RiWhatsappLine } from 'react-icons/ri';

import { Container } from './styles';

function PublicationData({ pet }) {
  return (
    <Container>
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
    </Container>
  )
}

export default PublicationData;
