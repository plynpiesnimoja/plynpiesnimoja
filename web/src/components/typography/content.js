import React from 'react'
import { propTypes } from '@sanity/block-content-to-react'
// import Img from 'gatsby-image'
// import { getFluidGatsbyImage } from 'gatsby-source-sanity'
// import clientConfig from '../../client-config'

// import styles from './figure.module.scss'

export const Paragraph = ({ node }) => {
  if (!node.asset) {
    return null
  }
  return (
    <p className={styles.root}>
      {propTypes.children}
    </p>
  )
}