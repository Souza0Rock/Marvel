import styled from "styled-components";

export const Container = styled.header `
    padding: 0 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #615772;
`;

export const RouterGitHub = styled.img `
    width: 20%;
`;

export const Li = styled.li `
    margin: 0 20px;
    font-size: 25px;
    text-transform: uppercase;
    color: #f2f5f7;
`;

export const Logo = styled.img `
    width: 20%;
    margin-right: 13%;
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
    background-color: #f2f5f7;
    border-radius: 5px 0 0 5px;
`;

export const Button = styled.button `
    height: 3rem;
    width: 20%;
    background: url('../../gifSearch.gif');
    background-size: 50px;
    background-color: #f2f5f7;
    border-radius: 0 5px 5px 0;
`;
