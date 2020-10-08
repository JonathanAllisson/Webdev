import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    display: flex;
    border-radius: 5px;
    background: #fff;
    position: relative;
    max-width: 380px;
    min-width: 270px;

    img {
        width: 100%;
        height: 300px;
        border-radius: 5px;
        border: 1px solid #7a77ff;
    }
    .box {
        position: absolute;
        z-index: 2;
        top: 290px;
        left: 0;
        width: 100%;
        height: 110px;
        display: flex;
        flex-direction: column;
        border: 1px solid #7a77ff;
        border-radius: 10px 10px 5px 5px;
        background: #fff;
        padding: 5px 10px;

        .box-top {
            display: flex;
            flex: 1;
            justify-content: space-between;
            align-items: center;

            h3 {
                font-size: 17px;
            }
            .circleGreen {
                padding: 5px 10px;
                background: green;
                color: #fff;
                border-radius: 50%;
            }
            .circleRed {
                padding: 5px 10px;
                background: red;
                color: #fff;
                border-radius: 50%;
            }
        }
        .box-bottom {
            margin-top: 5px;
            height: 50px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }

        svg {
            font-size: 40px;
            color: #ccc;
            cursor: pointer;

            &:hover {
                color: red;
            }
        }
        p {
            font-size: 14px;
        }
    }
`;
