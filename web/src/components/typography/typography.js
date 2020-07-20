import React from 'react'

import { cn } from 'src/lib/helpers'
import './styles.scss'
import './typography.scss'

export const Typo = ({ 
    className,
    children, 
    caps, 
    regular, 
    bold, 
    bolder, 
    span, 
    size,
    responsive 
  }) => {
  const Size = (size === "large" ? "large" : "") || (size === "big" ? "big" : "") || (size === "mid" ? "mid" : "") || (size === "small" ? "small" : "")
  const classes = cn(span ? 'text' : 'paragraph', responsive && 'responsive', Size, caps && 'caps', regular && 'regular', !bolder && bold && 'bold', !bold && bolder && 'bolder', className)
  return(
    <p className={classes}>
      {children}
    </p>
  )
}

export const Italic = ({ children, caps, bold, bolder, className }) => {
  const classes = cn("italic", caps ? "caps" : "", !bolder && bold ? "bold" : "", !bold && bolder ? "bolder" : "", className)
  return(
    <em className={classes}>
      {children}
    </em>
  )
}

export const Quote = ({ children }) => (
  <>
    &bdquo;{children}&rdquo;
  </>
)

export const Heading = (props) => {
  const {
    id, 
    size = 1, 
    responsive,
    title,
    caps,
    className,
    ...other 
  } = props
  const Component = 
    (size === "large" || size == 1 ? "h1" : null) || 
    (size === "big"   || size == 2 ? "h2" : null) || 
    (size == 3 ? "h3" : null) || 
    (size === "mid"   || size == 4 ? "h4" : null) || 
    (size == 5 ? "h5" : null) || 
    (size === "small" || size == 6 ? "h6" : null);

  const styles = {
    root: `Heading${!title ? ` heading${size}` : ''}`,
    title: title ? `${responsive ? 'responsiveTitle' : 'title'}${size}` : '',
    caps: caps ? 'caps' : ''
  }
  const classes = cn(className, styles.root, styles.title, styles.caps)

  return(
    <div className={classes}>
      <Component id={id ? id : null} {...other}>
        {props.children}
      </Component>
    </div>
  )
}