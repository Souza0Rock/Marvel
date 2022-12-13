import { Fragment, useEffect, useRef, useState } from 'react';
import Header from '../../../components/Header';
import MainCharacters from '../../../components/MainCharacters';
import { ThemeProvider } from 'styled-components';
import { ResetCSS } from '../../global/styles/resetCSS';
import { THEME } from '../../global/styles/theme';
import * as S from "../../../components/Header/styles";

export default function Characters() {

  if (typeof window !== "undefined") {
    document.title= "Marvel Universe | Characters";
  }

  const ref = useRef(null)

  const closeSidebar = (event: any) => {
    //@ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      setSidebar(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', closeSidebar, true)
      return () => {
      document.removeEventListener('click', closeSidebar, true)
      }
  }, [])

  const [sidebar, setSidebar] = useState(false)

  const [search, setSearch] = useState("");
  const [request, setRequest] = useState("");


  return (
    <Fragment>
      <ThemeProvider theme={THEME}>
        <ResetCSS />
          <div ref={ref} onClick={closeSidebar} />
          <Header sidebar={sidebar} setSidebar={setSidebar}>
            <S.Input 
              type={"text"}
              placeholder={"search"}
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}
            />
            <S.Button 
              type="submit"
              onClick={() => 
              {}}
            />
          </Header>
          <MainCharacters propFilter={search} />
      </ThemeProvider>
    </Fragment>
  )
}
