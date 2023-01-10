import styled from "styled-components";

interface Props {
  scroll: boolean
}

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
  
  p {
    margin: auto;
    padding: 3%;
    font-size: 15px;
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
    max-height: 92vh;
    padding: 1rem;
    top: 4%;
    left: 7.5%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 51%;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 580px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Dropdown = styled.div<Props> `
  width: 20%;
  
  & h2 {
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    color: #000;
    background-color: #f2f5f7;
  }

  & ul {
    max-height: 89.5%;
    overflow-y: ${({ scroll }) => scroll ? 'scroll' : 'none'};
  }
`;

export const DropItem = styled.li``;

export const DivImg = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.light};
  
  @media (max-width: 768px) {
    min-height: 50%;
  }
  
  @media (max-width: 580px) {
    flex-direction: column;        
  }
`;

export const Img = styled.img`
  max-width: 180px;
  max-height: 180px;
  margin: auto 0;
  padding: 10px;

  @media (max-width: 768px) {
    margin: auto;
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
    
  &:hover {
    color: ${({ theme }) => theme.colors.red_marvel};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(0 0 0 / 40%);
`;
