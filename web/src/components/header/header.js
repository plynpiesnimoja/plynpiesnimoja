import { Link } from 'gatsby'
import React from 'react'
import Icon from 'src/components/icon'
import { cn } from 'src/lib/helpers'

import styles from './header.module.scss'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
      </div>

      {/* <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button> */}

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/archive/'>Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
