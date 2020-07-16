import React from 'react';

//import './styles.scss';

const Anchor = (props) => {

  const { 
    to,
    url,
    children, 
    ariaLabel, 
    ...other
  } = props
  
  const rel="noopener noreferrer";
  const target="_blank";



  return(
    <a
      href={to} 
      target={target} 
      rel={rel}
      aria-label={ariaLabel}
      {...other}
    >{children}</a>
  )   
}

export default Anchor;