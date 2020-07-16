import React, { useState, useEffect } from 'react'

import { buildImageObj } from 'src/lib/helpers'
import { imageUrlFor } from 'src/lib/image-url'

import Button from 'src/components/button'
import { Heading, Typo } from 'src/components/typography'
import BlockContent from 'src/components/block-content'

import { cn } from 'src/lib/helpers'

import styles from './persona.module.scss'
import './styles.scss'

const Persona = (props) => {
  //const [on, setOn] = useState(checked ? true : false);
  const [on, setOn] = useState(false);

  const Switch = () => {
    setOn(on => !on);
    //if (onChange) onChange();
    console.log("czek dis słycz!")
  }
  const { id, name, image, bio, role, container } = props
  const classes = {
    root: 'Persona',
    header: 'Persona-header',
    container: 'Persona-container',
    content: 'Persona-content',
    active: on ? 'active' : ''
  }

  const label = !on ? 'Więcej...' : 'Zwiń'

  console.log("persona imidż", image.url)
  console.log("persona dejta", props)

  return(
    <>{name && (

    <div className={cn(styles.root, classes.root, classes.active)}>
      <div className={styles.personaAvatar}>
        {image && image.url && (
          <img 
            src={image.url} 
          />
        )}
      </div>
      <div className={cn(classes.container, styles.personaContainer)}>
        <div className={classes.header}>
          <Heading size="big">
            {name}
          </Heading>
          {role && (
            <Typo>{role}</Typo>
          )}

        </div>
        <div className={classes.content}>
          <div className='Content-block'>
            <BlockContent blocks={bio || []} />
          </div>
          <div className='Content-bottom-panel'>
            <Button 
              onClick={Switch}
              primary={on ? true : false}
            >{label}</Button>
          </div>
        </div>

      </div>


    </div>

    )}</>
  )
}

export default Persona


export const Avatar = ({ image }) => (
  <img
    src={imageUrlFor(buildImageObj(image.url))
      .width(200)
      //.height(200)
      .height(Math.floor((9 / 16) * 200))
      .fit('crop')
      .url()}

    // TO-DO Alt Text for Avatar -> if any 
    //alt={props.heroImage.alt}
  />
)