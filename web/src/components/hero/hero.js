import React from 'react'
import Container from '../../components/container'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import styles from './hero.module.scss'

const Hero = ({ children, heroImage }) => {
  // console.log("hiro imidż", heroImage)
  const HeroImage = heroImage !== null ? imageUrlFor(buildImageObj(heroImage)).fit('crop').url() : false
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

      <Background heroImage={heroImage} />
    </div>
  )
}

export default Hero

const Background = ({ heroImage }) => (
  <div 
    className={styles.heroImage}
    role="img" 
    aria-label="Zdjęcie zespołu Płyń pieśni moja" 
  > 
    <img
      src={imageUrlFor(buildImageObj(heroImage))
        .width(1920)
        .height(Math.floor((9 / 16) * 1920))
        .fit('crop')
        //.fit('crop')
        .url()}

      // TO-DO Alt Text for HeroImage  
      //alt={props.heroImage.alt}
    />
    <GradientOverlay />
  </div>
)
const GradientOverlay = () => (
  <div className={styles.gradientOverlay} />
)

export const Overlay = () => (
  <div className="overlay" />
)