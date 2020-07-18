import React from 'react'

import { Heading, Typo, Rule } from 'src/components/typography'

import styles from 'src/components/page.module.scss'

const Page = (props) => {
  const { title, children } = props
  return(
    <>
      <div className={styles.pageHeader}>
        <Heading responsive title size={1}>{title}</Heading>
      </div>
      <div className={null}>
        {children}
      </div>
    </>
  )
}

export default Page