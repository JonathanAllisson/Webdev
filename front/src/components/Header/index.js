import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineUser, AiOutlinePoweroff } from 'react-icons/ai';
import { Container } from './styles';

import { Context } from '../../context/AuthProvider';

function Header() {
    const { authenticated, user, signout } = useContext(Context);

    return (
        <Container>
            <nav>
                <Link className="logo" to="/">
                    AuA
                </Link>
                <div>
                    {authenticated ? (
                      <>
                        <span>
                          Bem vindo {user.name}
                          <AiOutlineUser />
                        </span>
                        <button onClick={signout}>
                          sair
                          <AiOutlinePoweroff />
                        </button>
                      </>
                    ) : (
                      <Link to="/login">
                          Login/Criar Conta
                          <AiOutlineUser />
                      </Link>
                    )}
                </div>
            </nav>
        </Container>
    );
}

export default Header;
