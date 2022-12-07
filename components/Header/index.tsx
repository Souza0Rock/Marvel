import React from "react";
import * as S from '../../src/global/styles/Header.styles'

export default function Header () {
    return (
        <S.Container>
            <nav>
                <S.Ul>
                    <S.Li>personagens</S.Li>
                    <S.Li>sagas</S.Li>
                    <S.Li>hq`s</S.Li>
                    <S.Li>filmes</S.Li>
                    <S.Li>séries</S.Li>
                </S.Ul>
            </nav>
            <S.Logo src='/images/logo.png'
            alt="Logo da Marvel" />
        </S.Container>
    )
}
