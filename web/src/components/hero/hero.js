import React from 'react'
import Container from '../../components/container'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import styles from './hero.module.scss'

const Hero = ({ children, heroImage }) => {
  // console.log("hiro imidż", heroImage)
  // const HeroImage = heroImage !== null ? imageUrlFor(buildImageObj(heroImage)).fit('crop').url() : false
  return (
    <div 
      className={styles.root} 
      //style={{ backgroundImage: HeroImage ? `url(${HeroImage})` : null}} 
    >
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
  const { heroImage, welcomeHeader, _rawBody } = props
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
        alt={heroImage.alt}
        // aria-label={heroImage.alt}
        // tabIndex='0'
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