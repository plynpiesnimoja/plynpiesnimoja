import React, { useEffect } from 'react'
import Header from 'src/components/header'

import Footer from 'src/components/footer'

//import { PolishBreakingText } from 'src/lib/string-utils'

import 'src/styles/layout.scss'
import styles from './layout.module.scss'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => {
  //useEffect(() => PolishBreakingText(), [])
  return(
    <>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <Main children={children} />
      <Footer />
    </>
  )
}

export default Layout


const Main = ({ children }) => (
  <main 
    id='main' 
    className={styles.content} 
    tabIndex={-1}
    aria-hidden={false}
    role='presentation'
  >{children}</main>
)