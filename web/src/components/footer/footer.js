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
          <DonationLogo className='footer-logo donation-logo' />
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
    //className='footer-section-column copyright'
  >
    <Heading size='mid' caps>© {new Date().getFullYear()}</Heading>
    <Typo bolder>Płyń pieśni moja</Typo>
  </div>
)

const SocialMedia = () => (
  <div 
    className={styles.footerSectionColumn}
    // className='footer-section-column social-media'
  >
    <Heading size='mid' caps>Śledź nas</Heading>
    <ul className='social-media-links'>
      {SocialMediaLinks.map((link, i) => (
        <li key={i}>
          <Anchor className='footer-link' to={link.url}>{link.label}</Anchor>
        </li>
      ))}
    </ul>
  </div>
)

const Contact = () => (
  <div 
    className={styles.footerSectionColumn}
    // className='footer-section-column contact'
  >
    <Heading size='mid' caps>Napisz do nas</Heading>
    <div className='contact-mail'>
      <Anchor className='footer-link' to={links.mail}>plynpiesnimoja@gmail.com</Anchor>
    </div>
  </div>
)