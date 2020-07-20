import React from 'react'

import { Link } from 'gatsby'
import Icon from 'src/components/icon'
import { Anchor } from 'src/components/typography'

import { cn } from 'src/lib/helpers'

import './button.scss'


const Button = (props) => {
  const { primary, ghostButton, to, icon, link, external, onClick, ariaLabel, ...others } = props
  // const classes = cn('Button', primary ? 'primary' : 'default', icon ? 'IconButton' : '', ghostButton && !primary ? 'ghost' : 'default' )
  const classes = cn('Button', primary && 'primary', icon && 'IconButton', ghostButton && 'ghost',  !primary && !ghostButton && 'default' )

  if (link && !external) {
    return(
      <div className={classes} {...others} >
        <Link to={props.to} aria-label={ariaLabel}>
          {icon && <IconButton icon={icon} />}
          <span>{props.children}</span>
        </Link>
      </div>
    )
  } else if (link && external) {
    return(
      <div className={classes} {...others}>
        <Anchor to={props.to} aria-label={ariaLabel}>
          {icon && <IconButton icon={icon} />}
          <span>{props.children}</span>
        </Anchor>
      </div>
    )
  } else {
    return(
      <div className={classes} {...others}>
        <button onClick={onClick} aria-label={ariaLabel}>
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