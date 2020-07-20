import React from 'react'
import Container from 'src/components/container'
import { buildImageObj } from 'src/lib/helpers'
import { imageUrlFor } from 'src/lib/image-url'
import styles from './hero.module.scss'

const Hero = ({ children, heroImage }) => {
  return (
    <div className={styles.root} tabIndex={0} aria-hidden={false}>
      <div className={styles.heroContainer}>
        <Container>
          {children}
        </Container>
      </div>
      {/* TO-DO Condition needed for HeroImage if is not uploaded */}
      <Background heroImage={heroImage} />
    </div>
  )
}

export default Hero

const Background = (props) => {
  const { heroImage } = props
  console.log("hiroł props", props)
  return (
    <div 
      className={styles.heroImage}
      tabIndex={-1}
    > 
      <img
        src={imageUrlFor(buildImageObj(heroImage))
          .width(1920)
          .height(Math.floor((9 / 16) * 1920))
          .fit('crop')
          .url()} 
        alt='Zdjęcie zespołu w tle'
        // alt={heroImage.alt}
        // aria-label={heroImage.alt}
      />
      <GradientOverlay />
    </div>
  )
}
const GradientOverlay = () => (
  <div className={styles.gradientOverlay} tabIndex={-1} />
)

export const Overlay = () => (
  <div className="overlay" tabIndex='-1' />
)