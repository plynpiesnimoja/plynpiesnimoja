import React from 'react'
import { BandLogo, DonationLogo } from 'src/components/logo';
import { Heading, Typo, Anchor } from 'src/components/typography'

import styles from './footer.module.scss'
import { cn } from 'src/lib/helpers'
import { links } from 'src/lib/data'

import './footer.scss'

const Footer = () => {
  return(
    <footer className={styles.root}>
      <div className={styles.footerWrapper}>
        <div className={cn(styles.footerSection, 'top')}>
          <Copyright />
          <SocialMedia />
          <Contact />
        </div>

        <div className={cn(styles.footerSection, 'logos')}>
          <BandLogo className='footer-logo band-logo' focusable />
          <DonationLogo className='footer-logo donation-logo' focusable />
        </div>

      </div>
    </footer>
  )
}

export default Footer



const SocialMediaLinks = [
  {
    url: links.facebook,
    label: 'Facebook'
  },
  {
    url: links.youtube,
    label: 'Youtube'
  },
  {
    url: links.instagram,
    label: 'Instagram'
  }
]


const Copyright = () => (
  <div 
    className={styles.footerSectionColumn}
    tabIndex={0}
  >
    <Heading 
      size={4} 
      aria-label={`Wszystkie prawa zastrzeżone ${new Date().getFullYear()}`} 
      caps
    >
      © {new Date().getFullYear()}
    </Heading>
    <Typo>Płyń pieśni moja</Typo>
  </div>
)

const SocialMedia = () => (
  <div 
    className={styles.footerSectionColumn}
    tabIndex={0}
  >
    <Heading size={4} caps>Śledź nas</Heading>
    <ul className='social-media-links'>
      {SocialMediaLinks.map((link, i) => (
        <li key={i}>
          <Typo>
            <Anchor className='footer-link' to={link.url}>{link.label}</Anchor>
          </Typo>
        </li>
      ))}
    </ul>
  </div>
)

const Contact = () => (
  <div 
    className={styles.footerSectionColumn}
    tabIndex={0}
  >
    <Heading 
      size={4} 
      caps
    >
      Napisz do nas
    </Heading>
    <div className='contact-mail'>
      <Typo>
        <Anchor className='footer-link' to={links.mail}>plynpiesnimoja@gmail.com</Anchor>
      </Typo>
    </div>
  </div>
)