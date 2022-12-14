import React, { useState } from "react";
import * as S from "./styles";
import { FaBars } from "react-icons/fa"
import Sidebar from "../Sidebar";
import Router from "next/router";

export default function Header ({sidebar, setSidebar, children}: any) {

    const showSidebar = () => setSidebar(!sidebar)

    const [request, setRequest] = useState("");
    // const baseURL = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a`
    
    // const requestSearch = () => {
    //     axios.get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a`)
    //     .then((response) => {
    //         setRequest(response?.data?.data)
    //     })
    // }

    return (
        <S.Container>
            <FaBars onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar} />}
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
