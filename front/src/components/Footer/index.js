import React from 'react';

import { Container } from './styles';
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <Container>
      <span>© - made by:</span>
      <a href="https://github.com/JonathanAllisson">
        <AiFillGithub />
        JonathanAllisson
      </a>
    </Container>
  );
}

export default Footer;
