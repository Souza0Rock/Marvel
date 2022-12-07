import Link from "next/link";
import React from "react";
import * as S from '../../src/global/styles/Header.styles'

export default function Header () {
    return (
        <S.Container>
            <Link href="https://github.com/Souza0Rock" target="_blank">
                <S.RouterGitHub>Conheça o desenvolvedor</S.RouterGitHub>
            </Link>
            <S.Logo src='/images/logo.png'
            alt="Logo da Marvel" />
            <S.divForm>
                <S.Input 
                type={"text"}
                placeholder={"exemplo"}/>
                <S.Button />
            </S.divForm>
        </S.Container>
    )
}
