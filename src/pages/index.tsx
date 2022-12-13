import { ThemeProvider } from 'styled-components';
import { ResetCSS } from '../global/styles/resetCSS';
import { THEME } from '../global/styles/theme';
import { Fragment, useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import SectionHome from '../../components/SectionHome';

export default function Home() {

  if (typeof window !== "undefined") {
    document.title= "Marvel Universe";
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
          <SectionHome />
      </ThemeProvider>
    </Fragment>
  )
}
