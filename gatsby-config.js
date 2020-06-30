'use strict'

const { resolve } = require('path')

module.exports = {
  siteMetadata: {
    name: 'Dan Stelljes'
  },
  plugins: [{
    resolve: 'gatsby-plugin-layout',
    options: {
      component: resolve('./src/layouts/default.js')
    }
  }, {
    resolve: 'gatsby-plugin-s3',
    options: {
      bucketName: 'stellj.es',
      hostname: 'stellj.es',
      protocol: 'https',
      removeNonexistentObjects: true
    }
  }, {
    resolve: 'gatsby-plugin-sass'
  }]
}
