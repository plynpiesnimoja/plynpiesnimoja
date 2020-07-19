import React, { useRef, useEffect } from 'react';

import { Heading, Typo, Rule } from 'src/components/typography'

import styles from 'src/components/page.module.scss'

const Page = (props) => {
  const { title, children } = props
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.focus();
  });

  return(
    <article 
      
      //ref={containerRef} 
      aria-label={`${title}`}
      tabIndex={-1}
      //tabIndex={0}
      
      
    >
      <Heading tabIndex={0} responsive title size={1}>{title}</Heading>
      {/* <div 
        className={styles.pageHeader}
        tabIndex={-1}
        // aria-hidden={true}
        // //aria-label='jestes na stronie'
      >
        <Heading responsive title size={1}>{title}</Heading>
      </div> */}
      <div className={null}>
        {children}
      </div>
    </article>
  )
}

export default Page