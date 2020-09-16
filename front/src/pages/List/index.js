import React  from 'react';

import { Container, FilterMenu, Listing } from './styles';

function List() {

    const animals = [
        {   
            "id": 457,
            "title": "dogao amarelo",
            "city": "Campina Grande",
            "image": "https://lh3.googleusercontent.com/-BXAeFMg_NXg/XA1dREBEHBI/AAAAAAAAEOc/lqv9DNhx3Ewp-uHV4cG-F4-u3ozDaoZDQCHMYCw/s640/20181006_152619.jpg",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            "id": 458,
            "title": "cachorro caramelo",
            "city": "Patos",
            "image": "https://lh3.googleusercontent.com/-BXAeFMg_NXg/XA1dREBEHBI/AAAAAAAAEOc/lqv9DNhx3Ewp-uHV4cG-F4-u3ozDaoZDQCHMYCw/s640/20181006_152619.jpg",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            "id": 454,
            "title": "cachorro sem dono",
            "city": "João Pessoa",
            "image": "https://lh3.googleusercontent.com/-BXAeFMg_NXg/XA1dREBEHBI/AAAAAAAAEOc/lqv9DNhx3Ewp-uHV4cG-F4-u3ozDaoZDQCHMYCw/s640/20181006_152619.jpg",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            "id": 450,
            "title": "gato sem dono",
            "city": "João Pessoa",
            "image": "https://www.agenciabrasilia.df.gov.br/wp-conteudo/uploads/2017/01/gato-animais-domesticos-adocao-zoonose-gabriel-jabur-.jpg",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            "id": 451,
            "title": "gato amarelo",
            "city": "João Pessoa",
            "image": "https://fotonovak.files.wordpress.com/2014/06/gato_1.jpg",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            "id": 452,
            "title": "gato preto",
            "city": "João Pessoa",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3I8T9hUSbSlGYwM5Wo5kfBCT2nD1x0rAflg&usqp=CAU",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
    ]


  return (
        <Container>
            <FilterMenu>
                <span>Filtros: </span>
                <select name="category">
                    <option value>Todos</option>
                    <option value="">cachorros</option>
                    <option value="">gatos</option>
                    <option value="">hamsters</option>
                </select>
              <input type="text" className="search-input" placeholder="Digite sua cidade" />
                <span>Ordenar por:</span>
                <select name="sort">
                    <option value>Mais recentes</option>
                    <option value>Mais antigas</option>
                </select>
            </FilterMenu>

            <Listing>
                { animals.map(animal => (
                    <li key={animal.id}>
                        <img src={animal.image} alt={animal.id} />
                        <div className="box">
                            <strong>{animal.title}</strong>
                            <strong>{animal.city}</strong>
                        </div>
                        <p>{animal.description}</p>
                    </li>
                )) }
            </Listing>
      </Container>
  )
}

export default List;