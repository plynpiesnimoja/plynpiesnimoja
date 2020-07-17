import React from 'react'

import styles from './footage.module.scss'

const Footage = (props) => (
  <div className={styles.root}>
    <div className={styles.videoWrapper}>
      <div className={styles.videoContainer}>
        <iframe
          src={`https://www.youtube.com/embed/${props.videoId}`}
          frameBorder={0} 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        >

        </iframe>
      </div>
    </div>
  </div>
)

export default Footage