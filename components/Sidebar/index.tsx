import { useRef, useEffect } from 'react'
import * as S from '../../src/global/styles/SideBar.styles'
import { FaTimes, FaHome, FaEnvelope, FaRegSun, FaUserAlt, FaIdCardAlt, FaRegFileAlt,FaRegCalendarAlt, FaChartBar} from "react-icons/fa"

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }:any) => {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <S.Container>
            <FaTimes onClick={closeSidebar} />
            <S.Content>
                <SidebarItem Icon={FaHome} Text="Home" />
                <SidebarItem Icon={FaChartBar} Text="Statistics" />
                <SidebarItem Icon={FaUserAlt} Text="Users" />
                <SidebarItem Icon={FaEnvelope} Text="Mail" />
                <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" />
                <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
                <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
                <SidebarItem Icon={FaRegSun} Text="Settings" />
            </S.Content>
        </S.Container>
    )
}

export default Sidebar
