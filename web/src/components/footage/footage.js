import React from 'react'
import { buildImageObj } from 'src/lib/helpers'
import { imageUrlFor } from 'src/lib/image-url'
import styles from './footage.module.scss'


// Lazy loading Embed YT Movie trick:
// https://css-tricks.com/lazy-load-embedded-youtube-videos/
// https://dev.to/haggen/lazy-load-embedded-youtube-videos-520g
// @PARAM `srcdoc` attr in <iframe /> element 


const Footage = props => {
  return(
    <>
      <iframe
        className={styles.videoContainer}
        src={`https://www.youtube.com/embed/${props.videoId}?rel=0`}
        frameBorder={0} 
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
      <PlaceHolderImage {...props} />
    </>
  )
}

export default Footage

// "Classic" placeholder and image for lazy load
const PlaceHolderImage = props => (
  <>
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






/*
const Footage = props => {
  const settings = {
    style: `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}a{display:flex;width:100%;height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#fff;text-shadow:0 0 0.5em #000}</style>`,
    label: `Odtwórz`
  }
  return(
    <>
      <iframe
        className={styles.videoContainer}
        src={`https://www.youtube.com/embed/${props.videoId}?rel=0`}
        srcdoc={`${settings.style}<a href=https://www.youtube.com/embed/${props.videoId}?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=1&autoplay=1 tabindex=0 aria-label=${settings.label}><img src=https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg alt=${props.title}><span>▶</span></a>`}
        frameBorder={0} 
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        loading='lazy'
        title={props.title}
        tabIndex={0}
      />
      <PlaceHolderImage {...props} />
    </>
  )
}
*/