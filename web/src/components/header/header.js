import { Link } from 'gatsby'
import React from 'react'
import Icon from 'src/components/icon'
// import { BandLogo } from 'src/components/logo'
import { cn } from 'src/lib/helpers'



import { navigation, links } from 'src/lib/data';

import styles from './header.module.scss'
import './header.scss'

const socialMediaIcons = [
  {
    url: links.facebook,
    icon: "facebook",
    label: "Facebook",
    desc: "Polub nas na Facebook'u"
  },
  {
    url: links.youtube,
    icon: "youtube",
    label: "Youtube",
    desc: "Subskrybuj nasz kanał na Youtube"
  },
  {
    url: links.instagram,
    icon: "instagram",
    label: "Instagram",
    desc: "Śledź nas na Instagramie"
  }
];

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <header className={styles.root}>
    <div className={styles.wrapper}>
      {/* <BandLogo /> */}
      <div className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      {console.log("Nav", showNav)}
      {console.log("Show Nav", onShowNav)}
      {console.log("Hide Nav", onHideNav)}
      {/* <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/archive/'>Archive</Link>
          </li>
        </ul>
      </nav> */}

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <div className={cn("Navigation-container", showNav ? "showNav" : "")}>
          <ul className="Menu-container">
            <NavItem page="" name='Strona główna' />
            {navigation.map(item => <NavItem key={item.page} {...item} />)}
          </ul>
          <ul className="Socialmedia-container">
            {socialMediaIcons.map(item => <SocialMediaLink {...item} />)}
          </ul>
        </div>
      </nav>

    </div>
  </header>
)

export default Header



const NavItem = (props) => (
  <li className='navLink'>
    <Link 
      to={`/${props.page}/`}
      activeClassName="active"
    >
      <span>{props.name}</span>
    </Link>
  </li>
)



const SocialMediaLink = (props) => (
  <li className='socialMediaLink'>
    <Link 
      to={props.link} 
      className='socialMediaButton'
    >
        <Icon symbol={props.icon} />
    </Link>
  </li>
)