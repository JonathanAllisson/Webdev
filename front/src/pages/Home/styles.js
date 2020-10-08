import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto 50px;
    max-width: 1230px;
    padding: 30px 20px 50px;

    > a {
      padding: 10px 30px;
      background: linear-gradient(45deg, #7a77ff, #310dff);
      color: #FFF;
      width: 350px;
      height: 70px;
      font-size: 25px;
      border-radius: 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      svg {
        font-size: 30px;
      }

      &:hover{
        transition: transform 1s;
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
    margin: 20px 0;
    grid-gap: 110px 30px;
    justify-content: center;
    list-style: none;
`;
