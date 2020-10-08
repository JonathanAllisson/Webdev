import styled from 'styled-components';

export const Container = styled.div`
    display: none;

    @media (min-width: 1060px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 700px;
        width: 500px;
        background: linear-gradient(45deg, #7a77ff, #310dff);

        margin: 20px 0 0 30px;
        border-radius: 10px;
    }

    > h1 {
        margin-top: 50px;
        color: #fff;
    }
`;
