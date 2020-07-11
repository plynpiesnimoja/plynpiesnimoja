import React, { Component } from 'react'

import { Link } from 'gatsby'
import Icon from 'src/components/icon'
import { Anchor } from 'src/components/typography'

const Button = (props) => {
  const Component = (props.link ? "a" : "button")
  return(
    <Component>
      {props.children}
    </Component>
  )
}

export default Button