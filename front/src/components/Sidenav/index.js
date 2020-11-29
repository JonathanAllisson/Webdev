import React from 'react';

import { Container } from './styles';

import Cat from '../../assets/cat.svg';
import Dog from '../../assets/dog.svg';

function Sidebar({type, setType, orderBy, setOrderBy}) {

  const handleChangeType = (event) => {
    const t = event.target.value;
    console.log(t);
    if(type === t){
      setType("");
    }
    else {
      setType(t);
    }
  }

  const handleChangeOrder = (event) => {
    const t = event.target.value;
    console.log(t);
    if(type !== t){
      setOrderBy(t);
    }
  }

    return (
        <Container>
          <li>
            <label>
              <input
                type="checkbox"
                value="cat"
                checked={type === "cat"}
                onChange={handleChangeType}
                />
                <img src={Cat} alt="cat"/>
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="dog"
                checked={type === "dog"}
                onChange={handleChangeType}
                />
                <img src={Dog} alt="dog"/>
            </label>
          </li>
          <li
            className="order"
          >
            <label>
              <input
                type="radio"
                value="desc"
                onChange={handleChangeOrder}
                checked={orderBy === "desc"}
                />
                <div>
                  <span>
                    Mais recentes
                  </span>
                </div>
            </label>
          </li>
          <li
            className="order"
          >
            <label>
              <input
                type="radio"
                value="asc"
                onChange={handleChangeOrder}
                checked={orderBy === "asc"}
                />
                <div>
                  <span>
                    Mais antigos
                  </span>
                </div>
            </label>
          </li>
        </Container>
    );
}

export default Sidebar;
