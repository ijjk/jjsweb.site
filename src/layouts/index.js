import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../style/global'

const Layout = ({ children }) => (
  <div>
    <Helmet title="Welcome - jjsweb.site">
      <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/icons/icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/icons/icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/icons/icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#29323C" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
