import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto 200px;
    max-width: 1230px;
    padding: 30px 20px 50px;

    > a {
      padding: 10px 30px;
      background: linear-gradient(45deg, #7a77ff, #310dff);
      color: #FFF;
      max-width: 350px;
      height: 70px;
      font-size: 25px;
      margin: 0 auto;
      border-radius: 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      transition: transform 1s;

      svg {
        font-size: 30px;
      }

      &:hover{
        transform: scale(1.2);
      }
    }

    .mid {
      display: flex;
      justify-content: space-between;
    }
`;

export const FilterMenu = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: space-around;

    @media (max-width: 530px){
      display: flex;
      flex-direction: column;
      .search-input {
        padding: 10px 30px;
      }
    }

    .search-input {
        margin: 0 10px;
        padding-left: 10px;
        flex: 1;
        border: 1px solid #7a77ff;
        border-radius: 5px;
    }
    select {
        height: 40px;
        border: 1px solid #7a77ff;
        padding: 0 5px;
        outline: none;
        border-radius: 5px;
    }

    span {
        align-self: center;
    }
`;

export const Listing = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 20px auto;
    grid-gap: 110px 30px;
    justify-content: center;
    list-style: none;

    @media (max-width: 900px){
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 630px){
      grid-template-columns: 1fr;
    }
`;
