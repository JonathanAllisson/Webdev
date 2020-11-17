import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto 200px;
    max-width: 1230px;
    padding: 30px 20px 50px;

    .buttonAndSearch{
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1230px;

      > button {
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
    .search{
      display: flex;
      align-items: center;
      background: #FFF;
      padding-right: 10px;
      border-radius: 5px;
      input {
        padding: 15px 10px;
        border-radius: 5px;
        border: 1px;
      }
      svg {
        font-size: 20px;
      }
    }
  }

    .mid {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
    }
  @media (max-width: 1100px){
    .mid{
      flex-direction: column;
    }
  }
  @media (max-width: 610px){
    .buttonAndSearch{
      flex-direction: column;
    }
    .search{
      margin-top: 20px;
    }
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
