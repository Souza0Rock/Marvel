import styled from "styled-components";

interface ThumbnailData {
    thumbnail: {
        path: string;
        extension: string;
    };
};

export const Container = styled.main `
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const UlCard = styled.ul `

`;

const urlImg = (props: ThumbnailData) => 
    `${props.thumbnail.path}.${props.thumbnail.extension}`

export const Card = styled.li `
    background-color: #f2f5f7;
    height: 450px;
    width: 400px;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 150px rgb(0, 0, 0, 0.3);

    h2, p {
        padding: 5px;
        text-align: justify;
    }

    div#img {
        height: 89%;
        width: 100%;
        background: url(${urlImg}) no-repeat center;
        background-size: cover;
    }
`;
