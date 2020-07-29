import React from 'react'
import { buildImageObj } from 'src/lib/helpers'
import { imageUrlFor } from 'src/lib/image-url'
// import styles from './footage.module.scss'

const Footage = props => (
  <>
    <iframe
      src={`https://www.youtube.com/embed/${props.videoId}?rel=0`}
      frameBorder={0} 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
    {props.thumbImage && props.thumbImage.asset && (
      <img
        src={imageUrlFor(buildImageObj(props.thumbImage))
          .width(900)
          .height(Math.floor((9 / 16) * 900))
          .url()}
        alt={props.thumbImage.alt}
        aria-hidden={true}
        tabIndex={-1}
      />
    )}
  </>
)

export default Footage
