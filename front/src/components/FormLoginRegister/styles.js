import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  padding: 20px;
  border: 1px solid #310dff;
  border-radius: 5px;

  span {
    padding: 3px;
    border: 1px solid #FF4136;
    width: 100%;
    margin: 10px 0px;
    color: #FF4136;
    display: flex;
    justify-content: center;
  }

  >div {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
  }

  h1 {
    font-weight: bold;
    font-size: 46px;
  }

  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 10px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
  }

  button {
    height: 56px;
    width: 100%;
    color: #FFF;
    background: linear-gradient(45deg, #7a77ff, #310dff);
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 10px;

    &:hover{
      opacity: 0.75;
    }
  }
`;
