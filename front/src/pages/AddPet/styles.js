import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  background: #FFF;

`;

export const Form = styled.form`
  margin: 40px auto;
  padding: 64px;
  border: 1px solid #777f97;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  .check {
    align-self: center;
    font-size: 39px;
    color: #00E676;
  }

  h1 {
    font-size: 36px;
  }

  fieldset {
    border: 0;
    margin-top: 44px;

    legend {
      margin-bottom: 40px;
      h2 {
        font-size: 24px;
      }
    }
  }

  button {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 30px 45px;
    border-radius: 8px;
    color: #FFF;
    background: linear-gradient(45deg, #7a77ff, #310dff);
    margin-top: 20px;
    font-size: 25px;

    &:hover {
      opacity: 0.66;
    }
  }
`;

export const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  input[type=text] {
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;

    &:focus {
      border: 1px solid #310dff;
    }
  }

  input[type=file]{
    display: none;
  }


  #imgLabel {
    padding: 40px 65px;
    border: 1px dashed #6c6c80;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
      font-size: 30px;
    }
  }


  textarea {
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 20px 24px;
    resize: none;
    font-size: 16px;
    color: #6c6c80;

    &:focus {
      border: 1px solid #310dff;
    }
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
  }


  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    background: #F0F0F5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6C6C80;

  }
`;
