import React from "react";
import * as S from "./styles";
import { FaBars } from "react-icons/fa"
import Router from "next/router";

export default function Header ({sidebar, setSidebar}: any) {

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <S.Container>
            <FaBars onClick={showSidebar} />
            <S.Logo src='/images/logo.png'
            alt="Logo da Marvel" 
            onClick={() => {Router.push('../')}}/>
            <S.divForm>
                <S.Input 
                type={"text"}
                placeholder={"search"}
                />
                <S.Button 
                type="submit"
                onClick={() => 
                {}}
                />
            </S.divForm>
        </S.Container>
    )
}
