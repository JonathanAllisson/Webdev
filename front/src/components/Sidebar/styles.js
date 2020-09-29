import styled from 'styled-components';

export const Container = styled.div`
    display: none;

    @media (min-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: min(500px, 100%);
        background: linear-gradient(45deg, #7A77FF, #310DFF);

        margin: 20px 0 0 30px;
        border-radius: 10px;
    }

    > h1 {
        margin-top: 50px;
        color: #FFF;
    }
`;