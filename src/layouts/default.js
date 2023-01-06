import React from 'react'

import { useSiteMetadata } from '../meta'

import * as styles from './default.module.scss'

export default function DefaultLayout ({ children }) {
  const siteMetadata = useSiteMetadata()

  return (
    <div className={styles.container}>
      <h1 className={styles.siteTitle}>
        {siteMetadata.name}
      </h1>

      {children}
    </div>
  )
}
