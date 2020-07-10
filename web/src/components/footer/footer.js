import React from 'react'

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
        {/* <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer

const Copyright = () => (
  <div className="footer-section-column copyright">
    <h4 size="small" caps>© {new Date().getFullYear()}</h4>
    <p bolder>Płyń pieśni moja</p>
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
    <h4 size="small" caps>Śledź nas</h4>
    <ul className="social-media-links">
      {SocialMediaLinks.map((link, i) => (
        <li key={i}>

            <a href={link.url} blank>{link.label}</a>

        </li>
      ))}
    </ul>
  </div>
)

const Contact = () => (
  <div className="footer-section-column contact">
    <h4 size="small" caps>Napisz do nas</h4>
    <div className="contact-mail">

        <a href={links.mail} blank>plynpiesnimoja@gmail.com</a>

    </div>
  </div>
)