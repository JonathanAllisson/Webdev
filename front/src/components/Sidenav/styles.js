import styled from 'styled-components';

export const Container = styled.ul`
  background: #fafbfc;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 20px 0 0 20px;

  @media (max-width: 1100px){
    flex-direction: row;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    padding: 10px;
    margin-left: 0px;

    li {
      flex: 1 0 170px;


    }
  }

  li {
    list-style: none;
    background: #F3F3FB;
    padding: 5px;
    border-radius: 5px;
    margin: 0 auto 30px auto;
    transition: .1s ease-out;
    position: relative;
    box-shadow: 5px 5px 15px 0px rgba(44,44,44,0.15);
    flex-grow: 0;
    &:hover {
      transform: scale(1.05);
    }

    input {
      -webkit-appearance: none;
      appearance: none;
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;

      &:checked {
        border: 2px solid #2c2c51;
      }
    }

    img {
      height: 150px;
      width: 150px;
    }


  }
  .order {
    height: 170px;
    width: 170px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 20px;
      white-space: nowrap;
    }
  }

`;
