import Link from "next/link";
import React, { Fragment } from "react";
import SectionMenuNavHeader from "../SectionMenuNavHeader";
import * as S from '../../src/global/styles/Header.styles';

export default function Header () {
    return (
        <Fragment>
            <S.Container>
                <Link href="https://github.com/Souza0Rock" target="_blank">
                    <S.RouterGitHub src='/images/github.png'
                    alt="conheça o desenvolvedor" />
                </Link>
                <S.Logo src='/images/logo.png'
                alt="Logo da Marvel" />
                <S.divForm>
                    <S.Input 
                    type={"text"}
                    placeholder={"search"}/>
                    <S.Button />
                </S.divForm>
            </S.Container>
            <SectionMenuNavHeader />
        </Fragment>
    )
}
