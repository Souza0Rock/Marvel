import styled from "styled-components";

export const Section = styled.section `
    padding: 50px;
`;

export const Ul = styled.ul `
    height: 13rem;
    display: flex;
    justify-content: space-evenly;
`;

export const Li = styled.li `
    width: 12%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #1C6EA4;
    border-radius: 10px;
    background-color: #3f4b62;
`;

export const TitleCard = styled.h3 `
    margin-top: 10px;
`;

export const DescriptionCard = styled.p `
    margin: 15px;
`;

export const Alert = styled.h1 `
    margin: auto;
    width: fit-content;
    color: #f2f5f7;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`
