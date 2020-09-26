import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    min-height: 100%;
  }
  
  body {
    padding-top: 4rem;
    -webkit-font-smoothing: antialiased;
    background-color: #F3F3FB;
    color: #2c2c51;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
  }
  button{
    cursor: pointer;
    border: 0;
  }
  a{
    text-decoration: none;
    color: #2c2c51;
  }
`;