import { Link } from 'gatsby'
import React from 'react'
import Icon from 'src/components/icon'
import { Anchor } from 'src/components/typography'
import { BandLogo } from 'src/components/logo'
import { cn } from 'src/lib/helpers'



import { navigation, links } from 'src/lib/data';

import styles from './header.module.scss'
import './header.scss'

const socialMediaIcons = [
  {
    to: links.facebook,
    icon: "facebook",
    label: "Facebook",
    desc: "Polub nas na Facebook'u"
  },
  {
    to: links.youtube,
    icon: "youtube",
    label: "Youtube",
    desc: "Subskrybuj nasz kanał na Youtube"
  },
  {
    to: links.instagram,
    icon: "instagram",
    label: "Instagram",
    desc: "Śledź nas na Instagramie"
  }
];

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <header className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>
          <BandLogo extended />
        </Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <div className={cn("Navigation-container", showNav ? "showNav" : "")}>
          
          <ul className="Menu-container">
            <NavItem name='Strona główna' />
            {navigation.map(item => <NavItem key={item.page} {...item} />)}
          </ul>

          <ul className="Socialmedia-container">
            {socialMediaIcons.map(item => <SocialMediaLink key={item.icon} {...item} />)}
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
      to={props.page ? `/${props.page}/` : '/'}
      activeClassName="active"
    >
      <span>{props.name}</span>
    </Link>
  </li>
)



const SocialMediaLink = (props) => (
  <li className='socialMediaLink'>
    <Anchor
      // {...props} 
      to={props.to}
      ariaLabel={props.desc}
      className='socialMediaButton'
    >
      <Icon symbol={props.icon} />
    </Anchor>
  </li>
)