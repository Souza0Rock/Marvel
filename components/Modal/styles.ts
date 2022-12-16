import styled from "styled-components";

export const Overlay = styled.div `
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(0 0 0 / 40%);
`;

export const Modal = styled.div `

    background-color: ${({ theme }) => theme.colors.dark_500};
    color: ${({ theme }) => theme.colors.light};
    padding: 2rem;
    border-radius: 0.75rem;
    max-width: 50vw;
    max-height: 60vh;
    position: fixed;
    top: 25%;
    bottom: 0;
    right: 0;
    left: 25%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1, p {
        color: black;
    }

    .divImg {
        display: flex;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.light};
    }

    p {
        margin: auto;
        padding: 0 5%;
        text-align: justify;
    }

    .containerFlex {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

export const CloseButton = styled.button `
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: black;
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    display: flex;

    &::before, &::after {
        content: '';
        position: absolute;
        width: 1.25rem;
        height: 0.125rem;
        background-color: currentColor;
        border-radius: 0.125rem;
        left: 0;
        top: calc(1.25rem / 2);
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
`;

export const Dropdown = styled.div `

    ul {
        display: flex;
        justify-content: space-between;
    }

    ul li {
        width: 20%;
        position: relative;
        float: left;
        background-color: ${({ theme }) => theme.colors.light};
    }

    ul li p {
        padding: 10px;
        font-size: 20px;
        text-align: center;
        color: black;
    }

    ul li ul {
        position: absolute;
        display: flex;
        flex-direction: column;
        left: 0;
        width: 100%;
        max-height: 220px;
        overflow-y: scroll;
        display: none;
    }

    ul li:focus-within > ul,
    ul li:hover > ul {
        display: initial;
        transition: all 0.5s;
    }

    ul li ul li {
        width: 100%;   
        border-bottom: 1px solid black;
    }

    .itemMap {
        font-size: 12px;
    }

    .dropItem {
        border-radius: 5px;
    }

    /* ::-webkit-scrollbar {
        width: 12px;
        background-color: red;
        border: 5px solid white;
    }

    ::-webkit-scrollbar-thumb {
        background-color: blue;
        border-radius: 50px;
        border: 2px solid white;
    } */
`;
