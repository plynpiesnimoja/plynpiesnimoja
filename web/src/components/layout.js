import React, { useEffect } from 'react'
import Header from 'src/components/header'

import Footer from 'src/components/footer'
import { CookiePopup, CookieConsentProvider, useCookieConsentState, useCookieConsentDispatch  } from 'src/components/cookie'

import { TextFormatter } from 'src/lib/string-utils'

import 'src/styles/layout.scss'
import styles from './layout.module.scss'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => {

  // const cookieConsentState = useCookieConsentState()
  // const cookieConsentDispatch = useCookieConsentDispatch()
  // const { Consumer } = useCookieConsentState


  return(
    <>
      
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <Main children={children} />
      <Footer />

      <CookiePopup />
    </>
  )
}

export default Layout


const Main = ({ children }) => { 
  useEffect(() => TextFormatter(), [])
  return(
    <main 
      id='main' 
      className={styles.content} 
      tabIndex={-1}
      aria-hidden={false}
      role='presentation'
    >{children}</main>
  )
}