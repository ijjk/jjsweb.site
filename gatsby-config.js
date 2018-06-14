const path = require('path') 

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-react-next',
    'gatsby-plugin-glamor',
    'gatsby-plugin-netlify',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
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
  ],
}
