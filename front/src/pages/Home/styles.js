import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1230px;
    padding: 0 20px 50px;

    .box2{
        display: flex;
        justify-content: space-between;
    }

`;

export const FilterMenu = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: space-around;

    .search-input {
        margin: 0 10px;
        padding-left: 10px;
        flex: 1;
        border: 1px solid #7A77FF;
        border-radius: 5px;
    }
    select {
        height: 40px;
        border: 1px solid #7A77FF;
        padding: 0 5px;
        outline: none;
        border-radius: 5px;
    }

    span {
        align-self: center;
    }
`;

export const Listing = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(270px,1fr));
    margin: 20px 0;
    grid-gap: 110px 30px;
    justify-content: center;
    list-style: none;
`;

export const Column = styled.div`
    width: 550px;
    border-radius: 10px;
    margin: 20px 0 0 50px;
    height: 700px;
    background-color: #353533;
`;