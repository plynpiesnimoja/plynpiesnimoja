import React, { Component } from 'react'

import { Link } from 'gatsby'
// import Icon from 'src/components/icon'
import { Anchor } from 'src/components/typography'

import { cn } from 'src/lib/helpers'

import './button.scss'


const Button = (props) => {
  const { primary } = props
  const classes = cn('Button', primary ? 'primary' : 'default')

  if (props.link && !props.external) {
    return(
      <div className={classes}>
        <Link to={props.to}>
          <span>{props.children}</span>
        </Link>
      </div>
    )
  } else if (props.link && props.external) {
    return(
      <div className={classes}>
        <Anchor to={props.to}>
          <span>{props.children}</span>
        </Anchor>
      </div>
    )
  } else {
    return(
      <div className={classes}>
        <button onClick={props.onClick}>
          <span>{props.children}</span>
        </button>
      </div>
    )
  }
}

export default Button