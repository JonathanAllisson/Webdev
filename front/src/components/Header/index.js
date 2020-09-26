import React from 'react';
import {Link} from 'react-router-dom';

import { Container } from './styles';

import { AiOutlineUser, AiFillHeart } from 'react-icons/ai'

function Header() {
  return (
        <Container>
            <nav>
                <Link className="logo" to="/">AA</Link>
                <div>
                    <Link to="/">
                        Login/Criar
                        <AiOutlineUser />
                    </Link>
                    <Link>
                        Favoritados
                        <AiFillHeart />
                    </Link>
                </div>
            </nav>
        </Container>
    )
}

export default Header;