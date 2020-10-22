import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px 0px;
  span {
    align-self: flex-end;
    padding: 10px;
    font-weight: 900;
  }
  h2 {
    font-size: 35px;
  }
  h3 {
    color: #C1BEAF;
    padding-top: 20px;
    font-size: 20px;
  }
  p {
    font-size: 25px;
    line-height: 26.5px;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }

  a {
    padding: 10px 30px;
    background-color: #00E676;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    font-size: 17px;
    max-width: 300px;
    align-self: center;

    svg{
      font-size: 30px;
      color: #FFF;
    }
  }

  .dxc {
    font-size: 25px;
    margin: 20px auto;
  }
  svg {
    font-size: 40px;
    align-self: center;
  }
`;
