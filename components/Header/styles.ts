import styled from "styled-components";

export const Container = styled.header `
    width: 100%;
    padding: 0 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #171618;
    box-shadow: 0 0 20px 3px;

    > svg {
        color: ${({ theme }) => theme.colors.light};
        width: 30px;
        height: 30px;
        cursor: pointer;

        @media (max-width: 480px) {
        width: 50px;
        height: 50px;
        margin: 3rem 0;
        align-self: baseline;
        }
    }
`;

export const Contents = styled.div `
    display: contents;

    @media (max-width: 480px) {
        padding-right: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Logo = styled.img `
    width: 20%;
    margin-left: 12.8%;
    cursor: pointer;

    @media (max-width: 1024px) {
        width: 30%;
        margin-left: 16.6%;
    }

    @media (max-width: 480px) {
        width: 60%;
        margin-left: 0;
    }
`;

export const divForm = styled.div `
    width: 15%;
    max-height: 3rem;
    margin: 1rem 0;
    display: flex;

    @media (max-width: 1024px) {
        width: 20%;
    }

    @media (max-width: 480px) {
        width: 70%;
        margin-bottom: 2rem;
    }
`;

export const Input = styled.input `
    height: 3rem;
    width: 80%;
    padding: 0 10px;
    font-size: 18px;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 5px 0 0 5px;
`;

export const Button = styled.button `
    min-height: 3rem;
    width: 20%;
    background: url('/images/gifs/GifSearch.gif');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 0 5px 5px 0;
`;
