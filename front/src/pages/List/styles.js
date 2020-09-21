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
    grid-template-columns: repeat(auto-fill,minmax(270px,1fr));
    margin: 20px 0;
    grid-gap: 100px 30px;
    justify-content: center;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        border-radius: 4px;  
        background: #FFF;  
        position: relative;

        img {
            width: 100%;
            height: 300px;
            border-radius: 5px;
            border: 1px solid #000A80;
        }

        .box {
            position: absolute;
            z-index: 2;
            top: 290px;
            left: 0;
            width: 100%;
            height: 105px;
            display: flex;
            flex-direction: column;
            border: 1px solid #000A80;
            border-radius: 5px;
            background: #FFF;
            padding: 5px 10px;
            

            .box-top {
                display: flex;
                flex: 1;
                justify-content: space-between;
                align-items: center;

                .circle {
                    padding: 5px 10px;
                    background: green;
                    color: #fff;
                    border-radius: 50%;
                }
            }

            .box-bottom {
                margin-top: 5px;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            svg{
                font-size: 40px;
                color: #CCC;
                cursor: pointer;

                &:hover {
                    color: red;
                }
            }
            p {
                font-size: 14px;
                
            }
        }
    }
`;