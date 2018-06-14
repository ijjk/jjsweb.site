import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../style/global'

const Layout = ({ children }) => (
  <div>
    <Helmet title="Welcome - jjsweb.site" />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
