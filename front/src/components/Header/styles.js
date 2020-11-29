import styled from 'styled-components';

export const Container = styled.div`
    border-bottom: 1px solid #7a77ff;
    position: fixed;
    width: 100%;
    background: #f3f3fb;
    top: 0;
    z-index: 1000;

    > nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
        width: 1200px;
        max-width: 100%;
        margin: 0px auto;

        .logo {
            padding: 0.5rem 0;
            font-size: 35px;
            font-weight: 900;
        }
        > div {
            display: flex;
            a, button, span {
                font-weight: 400;
                font-size: 20px;
                margin-left: 30px;
                display: flex;
                align-items: center;
                position: relative;
                overflow: hidden;
                transition: all 1s;

                &:before{
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 2px;
                  background: #310dff;
                  bottom: 0px;
                  left: 0px;
                  transform: translateX(-100%);
                  transition: all 0.5s;

                }
                &:hover:before {
                  transform: translateX(0%);
                }
            }

            svg {
                font-size: 20px;
                margin-left: 5px;
            }
        }
    }
`;
