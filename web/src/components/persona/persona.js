import React, { useState, useEffect } from 'react'

import { buildImageObj } from 'src/lib/helpers'
import { imageUrlFor } from 'src/lib/image-url'
import { Anchor } from 'src/components/typography'
import Button from 'src/components/button'
import Icon from 'src/components/icon'
import { Heading, Typo } from 'src/components/typography'
import BlockContent from 'src/components/block-content'

import { links } from 'src/lib/data';
import { cn } from 'src/lib/helpers'

import styles from './persona.module.scss'
import './styles.scss'

const socialMediaIcons = [
  {
    to: links.facebook,
    icon: "twitter",
    label: "Twitter",
    desc: "Przećwierknij mnie na Twitterze"
  },
  {
    to: links.facebook,
    icon: "facebook",
    label: "Facebook",
    desc: "Polub nas na Facebook'u"
  },
  {
    to: links.youtube,
    icon: "youtube",
    label: "Youtube",
    desc: "Subskrybuj nasz kanał na Youtube"
  },
  {
    to: links.instagram,
    icon: "instagram",
    label: "Instagram",
    desc: "Śledź nas na Instagramie"
  },
  {
    to: links.instagram,
    icon: "linkedin",
    label: "Linkedin",
    desc: "Zobacz linkedina"
  }
];

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

  console.log("persona imidż parent", image)
  // console.log("persona dejta", props)

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
              <Heading size="big">
                {name}
              </Heading>
              {role && (
                <Typo>{role}</Typo>
              )}

            </div>
            {bio && (
              <div className={classes.content}>
                <div className='Content-block'>
                  {/* Condition here links array > 0 */}
                  <div className='Persona-links-container'>
                    
                    <div className='Persona-bio-link'>
                      <Button 
                        //link
                        icon='documentDownload'
                        ghostButton
                      >Pobierz Bio</Button>
                    </div>
                    <ul className='Persona-socialmedia-links'>
                      {socialMediaIcons.map(item => <SocialMediaLink key={item.icon} {...item} />)}
                    </ul>
                  </div>

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
      ariaLabel={props.desc}
      className='socialMediaButton'
    >
      <Icon symbol={props.icon} />
    </Anchor>
  </li>
)