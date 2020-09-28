import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1020px;
  margin: 0 auto 30px;
`;

export const Panel = styled.div`
  margin-top: 30px;
  background: #fff;
  display: grid;
  grid-template-columns: 65fr 35fr;
  border: 1px solid #7a77ff;
  border-radius: 5px;
`;

export const Column = styled.div`
  &:first-child {
    border-right: 1px solid #7a77ff;
  }
`;

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 530px;
  > img {
    height: 73%;
  }
`;

export const Comments = styled.div`
  margin-top: 30px;
  border-top: 1px solid #7a77ff;

  > h1 {
    margin-top: 30px;
  }

  > textarea {
    border: 1px dashed #7a77ff;
    border-radius: 5px;
    padding: 10px 30px;
    width: 100%;
    margin: 20px auto 0;
    font-size: 20px;
  }

  > button {
    padding: 20px 30px;
    background: linear-gradient(45deg, #7a77ff, #310dff);
    color: #fff;
    border-radius: 10px;
    float: right;
    font-size: 20px;
  }
`;

export const Dados = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    margin-top: 20px;
    font-size: 20px;
  }

  > div {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
`;
