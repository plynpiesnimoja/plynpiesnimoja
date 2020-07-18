import React, { Component } from 'react'

import { Link } from 'gatsby'
import Icon from 'src/components/icon'
import { Anchor } from 'src/components/typography'

import { cn } from 'src/lib/helpers'

import './button.scss'


const Button = (props) => {
  const { primary, ghostButton, to, icon, link, external, onClick } = props
  const classes = cn('Button', primary ? 'primary' : 'default', icon ? 'IconButton' : '', ghostButton && !primary ? 'ghost' : 'default' )

  if (link && !external) {
    return(
      <div className={classes}>
        <Link to={props.to}>
          {icon && <IconButton icon={icon} />}
          <span>{props.children}</span>
        </Link>
      </div>
    )
  } else if (link && external) {
    return(
      <div className={classes}>
        <Anchor to={props.to}>
          {icon && <IconButton icon={icon} />}
          <span>{props.children}</span>
        </Anchor>
      </div>
    )
  } else {
    return(
      <div className={classes}>
        <button onClick={onClick}>
          {icon && <IconButton icon={icon} />}
          <span>{props.children}</span>
        </button>
      </div>
    )
  }
}

export default Button

const IconButton = (props) => {
  const { icon } = props
  return(
    <div className='icon-container'>
      <Icon symbol={icon} />
    </div>
  )
}