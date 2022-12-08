import React from 'react'
import * as S from './styles'

const SidebarItem = ({ Icon, Text }: any) => {
    return (
        <S.Container>
            <Icon />
            {Text}
        </S.Container>
    )
}

export default SidebarItem