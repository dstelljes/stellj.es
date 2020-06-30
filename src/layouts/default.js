import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import styles from './default.module.scss'

export default ({ children }) => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          name
        }
      }
    }
  `)

  return (
    <>
      <Helmet defaultTitle={siteMetadata.name} titleTemplate={`${siteMetadata.name} | %s`} />

      <div className={styles.container}>
        <h1>
          {siteMetadata.name}
        </h1>

        {children}
      </div>
    </>
  )
}
