import React, { useEffect, useState, useContext } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';

import { Container, Listing } from './styles';

import Sidenav from '../../components/Sidenav';
import PetCard from '../../components/PetCard';
import { Context } from '../../context/AuthProvider';

import { FaCat, FaDog, FaSearch } from 'react-icons/fa';

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
          <div className="buttonAndSearch">
            <button onClick={() => redirectAddPet()}>
              <FaDog />
              Adicionar um Pet
              <FaCat />
            </button >
            <div className="search">
              <input
                type="text"
                className="search-input"
                placeholder="Digite sua cidade"
                value={searchCity}
                onChange={e => setSearchCity(e.target.value)}
                />
                <FaSearch />
            </div>
          </div>
          <div className="mid">
              <Sidenav
                type={type}
                setType={setType}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
              />
              <Listing>
                  {animals.map((animal) => (
                      <PetCard animal={animal} key={animal.id} handleDelete={handleDelete} />
                  ))}
              </Listing>
          </div>
        </Container>
    );
}

export default Home;
