import React from 'react';
import { render } from '@testing-library/react';
import PetCard from '../components/PetCard';
import { StaticRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

const ex1 = {
  "city": "Campina Grande",
  "vaccinated": true,
  "title": "Dogao da liberdade",
  "description": "o terror das pernas das 9nha"
}

const ex2 = {
  "city": "Campina Grande",
  "vaccinated": false,
  "title": "xispirito",
  "description": "Gato caçador de"
}


describe("teste 1", () => {
  it("Testa se ta sendo criado um cartão de cachorro com o titulo escolhido", () => {
    const { getByText } = render(
      <StaticRouter>
        <PetCard animal={ex1} />
      </StaticRouter>
    );
    expect(getByText("Dogao da liberdade")).toBeTruthy();
  })
})

describe("teste 2", () => {
  it("Testa se ta sendo criado um gato sem cartera de vacinação", () => {
    const { getByText } = render(
      <StaticRouter>
        <PetCard animal={ex2} />
      </StaticRouter>
    );
    expect(getByText("N")).toBeDefined();
  })
})

describe("teste 3", () => {
  it("Testa se ta sendo criado um gato com o titulo certo", () => {
    const { getByText } = render(
      <StaticRouter>
        <PetCard animal={ex2} />
      </StaticRouter>
    );
    expect(getByText("Gato caçador de")).toBeTruthy();
  })
})
