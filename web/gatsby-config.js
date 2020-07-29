// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-173147850-1`,
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Płyń pieśni moja`,
        short_name: `Płyń pieśni moja`,
        start_url: `/`,
        icon: `src/logo.png`,
        icons: [
          {
            'src': `icons/icon-48x48.png`,
            'sizes': `48x48`,
            'type': `image/png`
          },
          {
            'src': `icons/icon-72x72.png`,
            'sizes': `72x72`,
            'type': `image/png`
          },
          {
            'src': `icons/icon-96x96.png`,
            'sizes': `96x96`,
            'type': `image/png`
          },
          {
            'src': `icons/icon-144x144.png`,
            'sizes': `144x144`,
            'type': `image/png`
          },
          {
            'src': `icons/icon-192x192.png`,
            'sizes': `192x192`,
            'type': `image/png`
          },
          {
            'src': `icons/icon-256x256.png`,
            'sizes': `256x256`,
            'type': `image/png`
          },
          {
            'src': `icons/icon-384x384.png`,
            'sizes': `384x384`,
            'type': `image/png`
          },
          {
            'src': `icons/icon-512x512.png`,
            'sizes': `512x512`,
            'type': `image/png`
          }
        ],
        background_color: `#3c0323`,
        theme_color: `#fee2bd`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `pl`
      }
    }
  ]
}
