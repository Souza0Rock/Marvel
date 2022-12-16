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
    }
`;

export const RouterGitHub = styled.img `
    width: 20%;
`;

export const Li = styled.li `
    margin: 0 20px;
    font-size: 25px;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.light};
`;

export const Logo = styled.img `
    width: 20%;
    margin-left: 13%;
    cursor: pointer;
`;

export const divForm = styled.div `
    width: 15%;
    display: flex;
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
