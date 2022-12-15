import styled from "styled-components";

export const Container = styled.div `
    height: 30rem;
    width: 50%;
    padding: 2rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.dark_500};
`;

export const Img = styled.img `
    width: 40%;
`;

export const ContainerTxt = styled.div `
    margin: 25px auto;

    h1 {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 10%;
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
`;
