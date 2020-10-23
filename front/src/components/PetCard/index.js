import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/AuthProvider';
import Swal from 'sweetalert2';
import api from '../../services/api';

import { AiFillHeart, AiFillDelete } from 'react-icons/ai';
import { Container } from './styles';

function PetCard({ animal, handleDelete }) {

  const { authenticated, user } = useContext(Context);
  const [delectable, setDelectable] = useState(false);

  useEffect(() => {
    if(authenticated){
      if(user.id === animal.user_id){
        console.log(user.id, animal.user_id);
        setDelectable(true);
      }
    }
  }, []);

  async function openConfirm(){
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Após a confirmação o arquivo será deletado!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, pode deletar!',
      cancelButtonText: 'Não, matenha'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deletado!',
          'Seu post foi deletado com sucesso',
          'success'
          )
          handleDelete(animal.id);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelado',
            'Seu arquivo não foi deletado :)',
            'error'
            )
          }
        })
    }

    return (
        <Container>
            {delectable ? (
              <button
                onClick={() => openConfirm()}
              >
                <AiFillDelete />
              </button>
            ) : (
              null
            )}
            <Link to={`/pet/${animal.id}`}>
              <img src={`http://localhost:3333/files/${animal.img}`} alt={animal.id} />
            </Link>
            <div className="box">
                <div className="box-top">
                    <AiFillHeart />
                    <div className="box-top-right">
                        <h4>{animal.city}</h4>
                        <span>Carteira de vacinação: </span>
                        {animal.vaccinated === 'true' ? (
                            <span className="circleGreen">S</span>
                        ) : (
                            <span className="circleRed">N</span>
                        )}
                    </div>
                </div>
                <div className="box-bottom">
                    <h4>{animal.title}</h4>
                    <p>{animal.description}</p>
                </div>
            </div>
        </Container>
    );
}

export default PetCard;
