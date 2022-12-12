import { Fragment, useEffect, useRef, useState } from 'react';
import Header from '../../../components/Header';
import SectionCharacters from '../../../components/SectionCharacters';
import { ThemeProvider } from 'styled-components';
import { ResetCSS } from '../../global/styles/resetCSS';
import { THEME } from '../../global/styles/theme';

export default function Characters() {

  if (typeof window !== "undefined") {
    document.title= "Marvel Universe - Characters";
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

  return (
    <Fragment>
      <ThemeProvider theme={THEME}>
        <ResetCSS />
        <div ref={ref} onClick={closeSidebar} />
          <Header sidebar={sidebar} setSidebar={setSidebar}/>
          <SectionCharacters />
      </ThemeProvider>
    </Fragment>
  )
}
