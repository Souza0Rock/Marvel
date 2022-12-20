import styled from "styled-components";

export const Container = styled.main `
    width: 100%;
    height: 100%;
    margin: 5rem 0;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const DivForm = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem 0;
`;

export const LabelSearch = styled.label `
    font-size: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.light};
`;

export const Input = styled.input `
    width: 15%;
    height: 2rem;
    padding: 0 10px;
    font-size: 1rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.light};

    @media (max-width: 1366px) {
        width: 22%;
    }

    @media (max-width: 1024px) {
        width: 35%;
    }

    @media (max-width: 480px) {
        width: 60%;
    }
`;

export const UlCard = styled.ul `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
`;

export const Card = styled.li `
    background-color: ${({ theme }) => theme.colors.light};
    max-height: 500px;
    width: 16%;
    min-width: 300px;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgb(0, 0, 0, 0.3);
    cursor: pointer;

    h2 {
        padding: 7px;
    }

    p {
        padding: 12px;
        text-align: justify;

        @media (max-width: 1024px) {
            display: none;
        }
    }

    #img {
        height: 90%;
        width: 100%;
        transition: all 1s;

        @media (max-width: 1024px) {
            height: 84%;
        }
    }

    @media (min-width: 1024px) {
        &:hover {
            #img {
                height: 200px;
                object-fit: cover;
            }
        }
    }
`;

export const ButtonMore = styled.button `
    height: 3rem;
    width: 10%;
    min-width: 150px;
    align-self: center;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.light};
`;
