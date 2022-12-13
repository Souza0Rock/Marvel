import React from 'react'
import Link from 'next/link'
import * as S from './styles'
import { FaTimes } from "react-icons/fa"

const Sidebar = ({ active }:any) => {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <S.Container>
            <FaTimes onClick={closeSidebar} />
            <S.DisplayFlex>
                <S.Content>
                    <Link href={'/Characters'}>
                        <S.SidebarItem >
                            <S.Icon src='/images/reactor.png'  />
                            characters
                        </S.SidebarItem>
                    </Link>
                    <S.SidebarItem>
                        <S.Icon src='/images/IconDeadpool.png'/>
                        movies
                    </S.SidebarItem>
                    <S.SidebarItem>
                        <S.Icon src='/images/shildAmerica.png' />
                        series
                    </S.SidebarItem>
                    <S.SidebarItem>
                        <S.Icon src='/images/groot.png' />
                        sagas
                    </S.SidebarItem>
                    <S.SidebarItem>
                        <S.Icon src='/images/wolverine.png' />
                        comics
                    </S.SidebarItem>
                    <S.SidebarItem>
                        <S.Icon src='/images/BookIcon.png' />
                        books
                    </S.SidebarItem>
                </S.Content>
                <S.DivRouter>
                    <Link href={"https://github.com/Souza0Rock"} target="_blank" >
                        <S.RouterGitHub src='/images/github.png' alt="developer's github" />
                    </Link>
                </S.DivRouter>
            </S.DisplayFlex>
        </S.Container>
    )
}

export default Sidebar
