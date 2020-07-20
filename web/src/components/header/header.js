import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
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
]

const breakPoint = 768

const SkipNavLink = () => (
  <a 
    className='skip-to-content-link'
    href='#main'
    aria-label='Przejdź do treści i pomiń nawigację'
  >
    Przejdź do treści
  </a>
)
const Header = ({ onHideNav, onShowNav, showNav }) => {
  console.log("showNav, onHideNav, onShowNav", showNav, onHideNav, onShowNav)
  //const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (typeof window === 'undefined') return;
  
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  });

  console.log(width)

  return(
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link to='/'>
            <BandLogo extended />
          </Link>
          <SkipNavLink />
        </div>


        {width <= breakPoint && (
          <button 
            className={styles.toggleNavButton} 
            onClick={showNav ? onHideNav : onShowNav}
            aria-label='Guzik menu'
            aria-expanded={showNav ? true : false}
          >
            <Icon symbol={showNav ? 'close' : 'menu'} />
          </button>
        )}


        <nav className={styles.nav}>
          <div 
            className={cn('Navigation-container', width <= breakPoint && 'mobile', showNav ? 'open' : 'hide')}
          >
            
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
}
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
      to={props.to}
      ariaLabel={props.desc}
      className='socialMediaButton'
    >
      <Icon symbol={props.icon} />
    </Anchor>
  </li>
)