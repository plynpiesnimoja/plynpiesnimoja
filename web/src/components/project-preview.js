import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj } from 'src/lib/helpers'
import { imageUrlFor } from 'src/lib/image-url'
import { cn } from 'src/lib/helpers'
import BlockText from './block-text'
import { Heading } from 'src/components/typography'
import Icon from 'src/components/icon'
// import { BadgeNew } from 'src/components/badge'

import styles from './project-preview.module.scss'

const ProjectPreview = props => {
  console.log("tumbImidż", props.thumbImage.asset)
  return (
    <Link className={styles.root} to={`/film/${props.slug.current}`} draggable={false}>
      <div className={cn(styles.leadMediaThumb, 'thumbImage')}>
        {/* <BadgeNew /> */}
        {props.thumbImage && props.thumbImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.thumbImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.thumbImage.alt}
          />
        )}
        {!props.thumbImage && <FootageThumbPlaceHolder />}
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