import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import { ucfirst } from '../lib/string-utils'
import { Heading, Typo, Rule } from 'src/components/typography'
import styles from './role-list.module.scss'

import Icon from 'src/components/icon'

const RoleList = (props) => {

  const {items, title} = props

  return (
    <div className={styles.root}>
      <Heading size={2}>{title}</Heading>
      <Rule full />
      <ul className={styles.list}>
        {items
          .filter(item => item.person !== null)
          .map(item => (
            <li key={item._key} className={styles.listItem}>
              <div>
                <div className={styles.avatar}>
                  {item.person && item.person.image && item.person.image.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(item.person.image))
                        .width(100)
                        .height(100)
                        .fit('crop')
                        .url()}
                      alt=''
                    />
                  )}
                  {!item.person.image && (
                                
                                  <ImagePlaceHolder />
                                
                  )}
                </div>
              </div>
              <div className={styles.label}>
                <div>
                  <strong>{(item.person && item.person.name) || <em>Brak nazwy</em>}</strong>
                </div>
                {item.roles && (
                  <div>
                    {item.roles.map((role, idx) => {
                      switch (true) {
                        case idx === 0:
                          return <span key={role}>{ucfirst(role)}</span>
                        case idx === item.roles.length - 1:
                          return <span key={role}> i {role}</span>
                        default:
                          return <span key={role}>, {role}</span>
                      }
                    })}
                  </div>
                )}
              </div>
            </li>
          ))}
      </ul>
      <Rule full thick='small' />
    </div>
  )
}

export default RoleList


const ImagePlaceHolder = () => (
  <div className={styles.imagePlaceHolder}>
    <Icon symbol='userAvatar' />
  </div>
)