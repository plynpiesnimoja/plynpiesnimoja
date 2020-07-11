import React from 'react';

//import './styles.scss';

const Anchor = ({ 
  to,
  url,
  children, 
  ariaLabel, 
  ...other 
}) => {
  const rel="noopener noreferrer";
  const target="_blank";



  return(
    <a 
      //className={ButtonStyle} 
      href={to} 
      target={target} 
      rel={rel}
      aria-label={ariaLabel} 
      {...other}
    >{children}</a>
  )   
}

export default Anchor;