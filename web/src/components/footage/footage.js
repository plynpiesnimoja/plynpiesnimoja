import React from 'react'

// import styles from './footage.module.scss'

const Footage = (props) => (
    <iframe
      src={`https://www.youtube.com/embed/${props.videoId}?rel=0`}
      frameBorder={0} 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      //tabIndex={0}
    />
)

export default Footage

// <div className={styles.videoWrapper}>