import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 30px;
    border-top: 1px solid #7a77ff;
    display: flex;
    flex-direction: column;

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
        margin-top: 10px;
        border-radius: 10px;
        align-self: flex-end;
        font-size: 20px;
        max-width: 170px;
    }
`;

export const Comment = styled.div`
  display: flex;
  margin-top: 20px;
  position: relative;


  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: linear-gradient(45deg, #7a77ff, #310dff);

    span {
      font-size: 27px;
      color: #FFF;
    }
  }


  .comment {
    margin-left: 5px;
    padding: 10px 30px;
    border: 1px solid #310dff;
    border-radius: 0px 20px 20px 20px;
    background-color: #FFF;


    p {
      margin-top: 10px;
      font-size: 19px;
    }

    .actions {
      float: right;

      svg {
        font-size: 22px;
        margin-left: 10px;
      }
    }
  }
`;
