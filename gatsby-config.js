const siteUrl = 'https://jjsweb.site'

module.exports = {
  siteMetadata: {
    siteUrl,
    author: `JJ Kasper`,
    title: `JJ's website`,
    description: `Just a site to show some stuff and maybe talk about some stuff`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        name: `JJ's web site`,
        display: `minimal-ui`,
        theme_color: `#000000`,
        short_name: `JJ's site`,
        background_color: `#000000`,
        icon: `src/assets/favicon-alt.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-jsx`,
      options: {
        sourceMaps: false,
        vendorPrefixes: true,
        optimizeForSpeed: true,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: '#039BE5',
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-matomo`,
      options: {
        siteUrl,
        siteId: '1',
        matomoUrl: 'https://mato.jjsweb.site',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
