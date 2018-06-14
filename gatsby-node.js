/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onPreBuild = () => {
  global.netlifyProps = {
    'data-netlify': 'true',
    'netlify-honeypot': 'somefield'
  }
}