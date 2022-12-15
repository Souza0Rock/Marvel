import React from "react";
import * as S from "./styles"

export function Error () {
    return (
        <S.Container>
            <S.Img src="/images/404.png" />
            <S.ContainerTxt>
                <h1>Error</h1>
                <p>Sorry, something went wrong.</p>
                <p>Try again later</p>
            </S.ContainerTxt>
        </S.Container>
    )
}
