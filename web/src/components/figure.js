import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '../../client-config'

import styles from './figure.module.scss'

export default ({node}) => {
  if (!node.asset) {
    return null
  }

  const fluidProps = getFluidGatsbyImage(node.asset._ref, {maxWidth: 675}, clientConfig.sanity)
// aria-hidden={true}>
  return (
    <figure className={styles.root} role='img' aria-label={node.alt}>
      <Img fluid={fluidProps} aria-hidden={true} alt={node.alt} />
      {node.caption && <figcaption aria-label={node.caption}>{node.caption}</figcaption>}
    </figure>
  )
}
