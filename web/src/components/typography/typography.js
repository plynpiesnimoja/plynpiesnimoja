import React from 'react';

import { cn } from 'src/lib/helpers'
import './styles.scss';

export const Typo = ({ children, caps, bold, bolder, className, span, size }) => {
  const Size = (size === "large" ? "large" : "") || (size === "big" ? "big" : "") || (size === "mid" ? "mid" : "") || (size === "small" ? "small" : "")
  const classes = cn(span ? "text" : "paragraph", Size, caps ? "caps" : "", !bolder && bold ? "bold" : "", !bold && bolder ? "bolder" : "", className)
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

export const Heading = ({ id, size, children, caps, first, ...other }) => {
  const Component = (size === "large" ? "h1" : null) || (size === "big" ? "h2" : null) || (size === "mid" ? "h4" : null) || (size === "small" ? "h6" : null);

  const classes = cn("Heading", size ? size : "", caps ? "caps" : "")
  return(
    <div className={classes} style={first ? { marginTop: 0 } : null}>
      <Component id={id ? id : null} {...other}>
        {children}
      </Component>
    </div>
  )
}