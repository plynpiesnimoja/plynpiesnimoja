import React, { useRef, useEffect } from 'react';

import { Heading, Typo, Rule } from 'src/components/typography'

import styles from 'src/components/page.module.scss'

const Page = (props) => {
  const { title, children } = props
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   containerRef.current.focus();
  // });

  return(
    <article 
      aria-label={`${title}`}
      tabIndex={-1}
      
      
    >
      <Heading className={styles.pageHeader} tabIndex={0} responsive title size={1}>{title}</Heading>
      <div className={null}>
        {children}
      </div>
    </article>
  )
}

export default Page