import React from "react";
import * as S from '../../src/global/styles/Header.styles'

export default function Header () {
    return (
        <S.Container>
            <S.RouterGitHub>Conheça o desenvolvedor</S.RouterGitHub>
            <S.Logo src='/images/logo.png'
            alt="Logo da Marvel" />
            <S.Input 
            type={"text"}
            placeholder={"exemplo"}
            value={"search"} />
        </S.Container>
    )
}
