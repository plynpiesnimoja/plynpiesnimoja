import React from 'react'

import { Heading, Typo, Rule } from 'src/components/typography'

const Page = (props) => {
  const { title, children } = props
  return(
    <>
      <div className={null}>
        <Heading responsive>{title}</Heading>
      </div>
      <div className={null}>
        {children}
      </div>
    </>
  )
}

export default Page