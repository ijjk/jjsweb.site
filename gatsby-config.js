const path = require('path') 

module.exports = {
  siteMetadata: {
    siteUrl: 'https://jjsweb.site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-react-next',
    'gatsby-plugin-glamor',
    'gatsby-plugin-netlify',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `data`),
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "jjsweb.site",
        short_name: "JJs site",
        start_url: "/",
        background_color: "#29323C",
        theme_color: "#ffffff",
        display: "browser",
        icon: "src/imgs/logo.png", 
      },
    }
  ],
}
