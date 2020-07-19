import React from 'react'
import Header from 'src/components/header'

import Footer from 'src/components/footer'

import '../styles/layout.scss'
import styles from './layout.module.scss'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <Main children={children} />
    <Footer />
  </>
)

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