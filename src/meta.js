import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Meta ({ children, title }) {
  const siteMetadata = useSiteMetadata()

  return (
    <>
      <title>{title || siteMetadata.name}</title>
      {children}
    </>
  )
}

export function useSiteMetadata () {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          name
        }
      }
    }
  `)

  return siteMetadata
}
