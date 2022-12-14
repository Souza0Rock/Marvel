import styled from "styled-components";

export const Overlay = styled.div `
    /* display: flex;
    justify-content: center;
    align-items: center; */
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(0 0 0 / 40%);
`;

export const Modal = styled.div `
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.light};
    padding: 2rem;
    border-radius: 0.75rem;
    max-width: 50vw;
    max-height: 50vh;
    position: fixed;
    top: 25%;
    bottom: 0;
    right: 0;
    left: 25%;

    h1 {
        color: black;
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