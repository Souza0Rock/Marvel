import styled from "styled-components";

interface Props {
    scroll: boolean
}

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(0 0 0 / 40%);
`;

export const Teste = styled.div`
    display: flex;
    width: 100%;
`;

export const Modal = styled.div`

    background-color: ${({ theme }) => theme.colors.dark_500};
    color: ${({ theme }) => theme.colors.light};
    padding: 2rem;
    border-radius: 0.75rem;
    max-width: 70vw;
    max-height: 60vh;
    position: fixed;
    top: 25%;
    bottom: 0;
    right: 0;
    left: 15%;
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

        #img {
            max-width: 180px;
            max-height: 180px;
            margin: auto;
            padding: 10px;
        }
    }

    p {
        margin: auto;
        padding: 5%;
        text-align: justify;
    }

    .containerFlex {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media (max-width: 1024px) {
        max-width: 85vw;
        left: 7.5%;
    }

    @media (max-width: 768px) {
        max-width: 85vw;
        max-height: 80vh;
        top: 10%;
        left: 7.5%;

        .divImg {
            min-height: 50%;
        }
    }

    @media (max-width: 580px) {
        .divImg {
            flex-direction: column;
        }
    }
`;

export const CloseButton = styled.button`
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

export const Dropdown = styled.div<Props>`
    
    width: 95%;

    ul {
        display: flex;
        justify-content: space-between;
    }

    ul li {
        width: 95%;
        position: relative;
        float: left;
        background-color: ${({ theme }) => theme.colors.light};
    }

    ul li p {
        padding: 10px;
        font-size: 20px;
        text-align: center;
        color: black;
        /* text-transform: uppercase; */
    }

    ul li ul {
        position: absolute;
        display: flex;
        flex-direction: column;
        left: 0;
        width: 100%;
        max-height: 200px;
        overflow-y: ${({ scroll }) => scroll ? 'scroll' : 'none'};
        border-radius: 0px 0px 5px 5px;
        display: none;
    }

    br {
        display: contents;

        @media (max-width: 965px) {
            display: initial;
        }
    }

    ul li:focus-within > ul,
    ul li:hover > ul {
        display: initial;
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

    .dropItem:hover {
        border-radius: 5px 5px 0 0;
    }
`;
