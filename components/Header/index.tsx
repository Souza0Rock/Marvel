import React, { useState } from "react";
import * as S from '../../src/global/styles/Header.styles';
import { FaBars } from "react-icons/fa"
import Sidebar from "../Sidebar";

const Header = ({sidebar, setSidebar}: any) => {

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <S.Container>
            <FaBars onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar} />}
            <S.Logo src='/images/logo.png'
            alt="Logo da Marvel" />
            <S.divForm>
                <S.Input 
                type={"text"}
                placeholder={"search"}/>
                <S.Button />
            </S.divForm>
        </S.Container>
    )
}

export default Header