import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'
import { Heading } from 'src/components/typography'
import Icon from 'src/components/icon'

import styles from './project-preview.module.scss'

const ProjectPreview = props => {
  return (
    <Link className={styles.root} to={`/film/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
        {!props.mainImage && <FootageThumbPlaceHolder />}
      </div>
      <Heading
        className='heading-link'
        size={2}
      >
        <span>{props.title}</span>
      </Heading>

      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}

    </Link>
  )
}

export default ProjectPreview


const FootageThumbPlaceHolder = () => (
  <div className={styles.footageThumbPlaceHolder}>
    <Icon symbol='video' />
  </div>
)