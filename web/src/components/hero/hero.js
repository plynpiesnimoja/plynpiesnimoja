import React from 'react'
import Container from '../../components/container'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import styles from './hero.module.scss'

const Hero = ({ children, heroImage }) => {
  console.log("hiro imidż", heroImage)
  const HeroImage = heroImage !== null ? imageUrlFor(buildImageObj(heroImage)).fit('crop').url() : false
  return (
    <div 
      className={styles.root} 
      style={{ backgroundImage: HeroImage ? `url(${HeroImage})` : null}} 
    >
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default Hero