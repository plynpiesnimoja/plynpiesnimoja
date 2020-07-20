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



let defaultHeight
let defaultWidth

if (typeof window !== `undefined`) {
  defaultHeight = window.innerHeight
  defaultWidth = window.innerWidth
}

const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    windowHeight: defaultHeight,
    windowWidth: defaultWidth,
  })

  useEffect(() => {
    const handler = () => setDimensions({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    })

    window.addEventListener(`resize`, handler)
    return () => window.removeEventListener(`resize`, handler)
  }, [])

  return dimensions
}



const Header = ({ onHideNav, onShowNav, showNav }) => {
  const viewportSize = useWindowSize();
  let width = viewportSize.windowWidth;

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


const SkipNavLink = () => (
  <a 
    className='skip-to-content-link'
    href='#main'
    aria-label='Przejdź do treści i pomiń nawigację'
  >
    Przejdź do treści
  </a>
)