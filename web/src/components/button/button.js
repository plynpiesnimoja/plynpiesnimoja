import React, { Component } from 'react'

import { Link } from 'gatsby'
// import Icon from 'src/components/icon'
import { Anchor } from 'src/components/typography'

import { cn } from 'src/lib/helpers'

import './button.scss'
//import styles from './header.module.scss'

const Button = (props) => {
  const classes = cn("Button")
  // const Component = (props.link ? "a" : "button")
  // return(
  //   <Component>
  //     {props.children}
  //   </Component>
  // )
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
        <button>
          <span>{props.children}</span>
        </button>
      </div>
    )
  }
}

export default Button