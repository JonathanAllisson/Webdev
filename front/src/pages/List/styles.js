import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1230px;
    padding: 0 20px 50px;

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
        border: 1px solid #ccc;
    }
    select {
        height: 40px;
        border: 1px solid #ccc;
        padding: 0 5px;
        outline: none;
    }

    span {
        align-self: center;
    }
`;

export const Listing = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    margin: 20px 0;
    justify-content: center;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        padding: 20px;    
        border: 1px solid #DDD;

        img {
            width: 100%;
            height: 300px;
        }

        .box {
            display: flex;
            justify-content: space-between;

            strong {
                font-size: 16px;
                color: #999;
            }
        }
    }
`;