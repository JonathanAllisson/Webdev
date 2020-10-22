import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1020px;
    margin: 0 auto 200px;
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


