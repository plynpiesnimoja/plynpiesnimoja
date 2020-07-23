import React, { useState, useRef, useEffect } from 'react'


import { buildImageObj } from 'src/lib/helpers'
import { imageUrlFor } from 'src/lib/image-url'
import { Anchor } from 'src/components/typography'
import Button from 'src/components/button'
import Icon from 'src/components/icon'
import { Heading, Typo } from 'src/components/typography'
import BlockContent from 'src/components/block-content'

import { polishBreakingTextFormatter } from 'src/lib/string-utils'

import { cn } from 'src/lib/helpers'

import styles from './persona.module.scss'
import './persona.scss'

const Persona = (props) => {
  // For one item expanded only trigger
  // const [on, setOn] = useState(checked ? true : false);
  const [on, setOn] = useState(false);
  const containerRef = useRef(null);

  const Switch = () => {
    setOn(on => !on);
    // if (onChange) onChange();
    // if (on) setBioFocus()
  }
  useEffect(() => {
    if (on) {
      containerRef.current.focus();
    }
  });

  const { 
    id, 
    name, 
    image, 
    bio, 
    role, 
    links, 
    attachment,
    websiteLink 
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


  console.log(props)

  // console.log(polishBreakingTextFormatter(role))
  // console.log(bio[0].children[0].text)

  return(
    <>
      {name && (
        <div 
          className={cn(styles.root, classes.root, classes.active)}
          data-id-person={id}
        >
          
          <div className={styles.personaAvatar} tabIndex={-1}>
            {image && image.asset && (
              <Avatar image={image} />
            )}
            {!image && (
              <ImagePlaceHolder />
            )}
          </div>

          <div className={cn(classes.container, styles.personaContainer)}>
            <div className={classes.header}>
              <div tabIndex={0}>
                <Heading size={2}>
                  {name}
                </Heading>
                {role && (
                  // <Typo regular responsive>{role}</Typo>
                  <Heading size={4} letterStyle={400} regular responsive>{role}</Heading>
                )}
              </div>
              <div className='Persona-links-container'>
                      
                {attachment && attachment.asset && (
                  <div className='Persona-bio-link'>
                    <Button 
                      to={attachment.asset.url}
                      link
                      ariaLabel='Pobierz biografie'
                      external
                      icon='documentDownload'
                      ghostButton
                    >Pobierz Bio</Button>
                  </div>
                )}
                {websiteLink && (
                  <div className='Persona-website-link'>
                    <Button 
                      to={websiteLink}
                      link
                      ariaLabel='Odwiedź stronę'
                      external
                      icon='documentDownload'
                      ghostButton
                    >Pobierz Bio</Button>
                  </div>
                )}
                {socialMediaLinks.length > 0 && (
                  <ul className='Persona-socialmedia-links' aria-label='Odnośniki do Social Media'>
                    {socialMediaLinks
                      .map((item, i) => <SocialMediaLink 
                                          key={i}
                                          icon={item.type} 
                                          to={item.url}
                                        />)}
                  </ul>
                )}

              </div>
            </div>

            {bio && (
              <div className={classes.content} role="region" aria-expanded={on ? true : false}>
                <section 
                  className='Content-block' 
                  tabIndex={-1}
                  ref={containerRef} 
                >
                  <BlockContent blocks={bio || []}  />    
                </section>

                <div className='Content-bottom-panel'>
                  <Button 
                    onClick={Switch}
                    primary={on ? true : false}
                    ariaLabel={
                      !on 
                        ? `Pokaż więcej informacji o osobie ${name}` 
                        : `Zamknij szczegóły`
                      }
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
    tabIndex={-1}
    aria-hidden={true}
  />
)

const ImagePlaceHolder = () => (
  <div className={styles.imagePlaceHolder} tabIndex={-1} aria-hidden={true}>
    <Icon symbol='userAvatar' />
  </div>
)

const SocialMediaLink = (props) => (
  <li className='socialMediaLink'>
    <Anchor
      // {...props} 
      to={props.to}
      ariaLabel={`Zobacz konto na ${props.icon}`}
      className='socialMediaButton'
    >
      <Icon symbol={props.icon} />
    </Anchor>
  </li>
)