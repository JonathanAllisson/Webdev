import React, { useEffect, useState, useContext } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';

import { Container, FilterMenu, Listing } from './styles';

import Sidebar from '../../components/Sidebar';
import PetCard from '../../components/PetCard';
import { Context } from '../../context/AuthProvider';

import { FaCat, FaDog } from 'react-icons/fa';

function Home({ history }) {

    const { authenticated } = useContext(Context);

    const [animals, setAnimals] = useState([]);
    const [type, setType] = useState('');
    const [searchCity, setSearchCity] = useState('');
    const [orderBy, setOrderBy] = useState('desc');

    useEffect(() => {
      window.scrollTo(0, 0);
        async function loadAnimals() {
            const listAnimals = await api.get(`post?type=${type}&order=${orderBy}`);
            console.log(listAnimals.data)
            setAnimals(listAnimals.data);
        }

        loadAnimals();
    }, [type, orderBy]);

    useEffect(() => {
      async function loadCity(){
        clearTimeout(searchTimer);
        var searchTimer = setTimeout(() => {
          api.get(`post?type=${type}&order=${orderBy}&pattern=${searchCity}`)
            .then( l => setAnimals(l.data));
        }, 1000);
      }
      loadCity();
    }, [searchCity])

    async function handleDelete(idPost){
      await api.delete(`post/${idPost}`);

      const filterPosts = animals.filter(a => a.id !== idPost);
      setAnimals(filterPosts);
    }

    async function redirectAddPet(){
      if(authenticated){
        history.push('/add');
      }
      else {
        toast.error('É necessário estar logado para adicionar um pet');
      }
    }

    return (
        <Container>
            <button onClick={() => redirectAddPet()}>
              <FaDog />
              Adicionar um Pet
              <FaCat />
            </button >
            <FilterMenu>
                <span>Filtros: </span>
                <select value={type} onChange={(e) => setType(e.target.value)} name="category">
                    <option value="">Todos</option>
                    <option value="dog">Cachorros</option>
                    <option value="cat">Gatos</option>
                </select>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Digite sua cidade"
                  value={searchCity}
                  onChange={e => setSearchCity(e.target.value)}
                />
                <span>Ordenar por:</span>
                <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)} name="sort">
                    <option value="desc">Mais recentes</option>
                    <option value="asc">Mais antigas</option>
                </select>
            </FilterMenu>

            <div className="mid">
                <Listing>
                    {animals.map((animal) => (
                        <PetCard animal={animal} key={animal.id} handleDelete={handleDelete} />
                    ))}
                </Listing>
                <Sidebar />
            </div>
        </Container>
    );
}

export default Home;
