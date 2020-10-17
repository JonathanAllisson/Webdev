import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineUser, AiFillHeart } from 'react-icons/ai';
import { Container } from './styles';

import { Context } from '../../context/AuthProvider';

function Header() {
    const { authenticated } = useContext(Context);

    return (
        <Container>
            <nav>
                <Link className="logo" to="/">
                    AuA
                </Link>
                <div>
                    <Link to="/">
                        Login/Criar
                        <AiOutlineUser />
                    </Link>
                    <Link to="/">
                        Favoritados
                        <AiFillHeart />
                    </Link>
                </div>
            </nav>
        </Container>
    );
}

export default Header;
