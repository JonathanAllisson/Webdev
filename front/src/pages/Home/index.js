import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, FilterMenu, Listing } from './styles';

import Sidebar from '../../components/Sidebar';
import PetCard from '../../components/PetCard';

function Home() {
    const [animals, setAnimals] = useState([]);
    const [type, setType] = useState('');
    const [orderBy, setOrderBy] = useState('desc');

    useEffect(() => {
        async function loadAnimals() {
            const listAnimals = await api.get(`post?type=${type}&order=${orderBy}`);
            console.log(listAnimals.data)
            setAnimals(listAnimals.data);
        }

        loadAnimals();
    }, [type, orderBy]);

    return (
        <Container>
            <FilterMenu>
                <span>Filtros: </span>
                <select value={type} onChange={(e) => setType(e.target.value)} name="category">
                    <option value="">Todos</option>
                    <option value="dog">Cachorros</option>
                    <option value="cat">Gatos</option>
                </select>
                <input type="text" className="search-input" placeholder="Digite sua cidade" />
                <span>Ordenar por:</span>
                <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)} name="sort">
                    <option value="desc">Mais recentes</option>
                    <option value="asc">Mais antigas</option>
                </select>
            </FilterMenu>

            <div className="mid">
                <Listing>
                    {animals.map((animal) => (
                        <PetCard animal={animal} key={animal.id} />
                    ))}
                </Listing>
                <Sidebar />
            </div>
        </Container>
    );
}

export default Home;
