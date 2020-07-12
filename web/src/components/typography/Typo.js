import React from 'react';

import { tidy } from 'utils/lib';
import './styles.scss';

export const Typo = ({ children, caps, bold, bolder, className, span, size }) => {
  const Size = (size === "large" ? "large" : "") || (size === "big" ? "big" : "") || (size === "mid" ? "mid" : "") || (size === "small" ? "small" : "");
  const classes = [span ? "text" : "paragraph", Size, caps ? "caps" : "", !bolder && bold ? "bold" : "", !bold && bolder ? "bolder" : "", className];
  return(
    <p className={tidy(classes)}>
      {children}
    </p>
  )
}

export const Italic = ({ children, caps, bold, bolder, className }) => {
  const classes = ["italic", caps ? "caps" : "", !bolder && bold ? "bold" : "", !bold && bolder ? "bolder" : "", className];
  return(
    <em className={tidy(classes)}>
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

  const classes = ["Heading", size ? size : "", caps ? "caps" : "",];
  return(
    <div className={tidy(classes)} style={first ? { marginTop: 0 } : null}>
      <Component id={id ? id : null} {...other}>
        {children}
      </Component>
    </div>
  )
}