import React from 'react';

import { Container, Panel, Gallery, Column } from './styles';

function Pet() {
  return(
        <Container>
            <Panel>
                <Column>
                    <Gallery>
                        <img alt="ff" src={'http://localhost:3333/files/007b8595a56c2dcb6501089762c5997f.png'} />
                    </Gallery>
                </Column>
            </Panel>
        </Container>
    )
}

export default Pet;