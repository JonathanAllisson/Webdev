import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillHeart } from 'react-icons/ai';
import { Container } from './styles';

function PetCard({ animal }) {
    return (
        <Container>
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
