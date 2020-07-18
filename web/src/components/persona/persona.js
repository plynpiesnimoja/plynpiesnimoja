import React, { useState, useEffect } from 'react'

import { buildImageObj } from 'src/lib/helpers'
import { imageUrlFor } from 'src/lib/image-url'
import { Anchor } from 'src/components/typography'
import Button from 'src/components/button'
import Icon from 'src/components/icon'
import { Heading, Typo } from 'src/components/typography'
import BlockContent from 'src/components/block-content'

import { cn } from 'src/lib/helpers'

import styles from './persona.module.scss'
import './persona.scss'

const Persona = (props) => {
  // For one item expanded only trigger
  // const [on, setOn] = useState(checked ? true : false);
  const [on, setOn] = useState(false);

  const Switch = () => {
    setOn(on => !on);
    // if (onChange) onChange();
    console.log("czek dis słycz!")
  }
  const { 
    // id, 
    name, 
    image, 
    bio, 
    role, 
    links, 
    attachment 
  } = props

  const classes = {
    root: 'Persona',
    header: 'Persona-header',
    container: 'Persona-container',
    content: 'Persona-content',
    active: on ? 'active' : ''
  }

  const label = !on ? 'Więcej...' : 'Zwiń'

  let socialMediaLinks = []

  // Destructing object with social media links and create an array
  Object.entries(links).forEach(([key, value]) => {
    if (value && key !== "_type") {
      socialMediaLinks.push( { type: key, url: value } )
    }
  })
  // console.log("dfg", socialMediaLinks)

  return(
    <>
      {name && (
        <div className={cn(styles.root, classes.root, classes.active)}>
          
          <div className={styles.personaAvatar}>
            {image && image.asset && (
              <Avatar image={image} />
            )}
            {!image && (
              <ImagePlaceHolder />
            )}
          </div>

          <div className={cn(classes.container, styles.personaContainer)}>
            <div className={classes.header}>
              <Heading size={3}>
                {name}
              </Heading>
              {role && (
                <Typo>{role}</Typo>
              )}

              <div className='Persona-links-container'>
                      
                {attachment && attachment.asset && (
                  <div className='Persona-bio-link'>
                    <Button 
                      link={attachment.asset.url}
                      external
                      icon='documentDownload'
                      ghostButton
                    >Pobierz Bio</Button>
                  </div>
                )}

                <ul className='Persona-socialmedia-links'>
                  {socialMediaLinks
                    .map((item, i) => <SocialMediaLink 
                                        key={i}
                                        icon={item.type} 
                                        to={item.url}
                                      />)}
                </ul>

              </div>
            </div>

            {bio && socialMediaLinks.length > 0 && (
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
            )}
          </div>


        </div>
      )}
    </>
  )
}

export default Persona


const Avatar = ({ image }) => (
  <img
    src={imageUrlFor(buildImageObj(image))
      .width(200)
      .height(200)
      .fit('crop')
      .url()}
    alt={image.alt}
  />
)

const ImagePlaceHolder = () => (
  <div className={styles.imagePlaceHolder}>
    <Icon symbol='userAvatar' />
  </div>
)

const SocialMediaLink = (props) => (
  <li className='socialMediaLink'>
    <Anchor
      // {...props} 
      to={props.to}
      //ariaLabel={props.desc}
      className='socialMediaButton'
    >
      <Icon symbol={props.icon} />
    </Anchor>
  </li>
)