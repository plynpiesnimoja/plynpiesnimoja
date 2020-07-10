import React from 'react'

import styles from './container.module.scss'

const Container = ({ children }) => {
  return <div className={styles.root}>{children}</div>
}

export default Container
