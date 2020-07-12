import React from 'react'

import { Heading, Typo, Anchor } from 'src/components/typography'

import styles from './footer.module.scss'

import { links } from 'src/lib/data';


const Footer = () => {
  return(
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerSection}>
          <Copyright />
          <SocialMedia />
          <Contact />
        </div>
      </div>
    </footer>
  )
}

export default Footer

const Copyright = () => (
  <div className="footer-section-column copyright">
    <Heading size="mid" caps>© {new Date().getFullYear()}</Heading>
    <Typo bolder>Płyń pieśni moja</Typo>
  </div>
)

const SocialMediaLinks = [
  {
    url: links.facebook,
    label: "Facebook"
  },
  {
    url: links.youtube,
    label: "Youtube"
  },
  {
    url: links.instagram,
    label: "Instagram"
  }
];

const SocialMedia = () => (
  <div className="footer-section-column social-media">
    <Heading size="mid" caps>Śledź nas</Heading>
    <ul className="social-media-links">
      {SocialMediaLinks.map((link, i) => (
        <li key={i}>
          <Anchor to={link.url}>{link.label}</Anchor>
        </li>
      ))}
    </ul>
  </div>
)

const Contact = () => (
  <div className="footer-section-column contact">
    <Heading size="mid" caps>Napisz do nas</Heading>
    <div className="contact-mail">
      <Anchor to={links.mail}>plynpiesnimoja@gmail.com</Anchor>
    </div>
  </div>
)