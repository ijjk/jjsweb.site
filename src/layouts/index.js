import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../style/global'

const Layout = ({ children, data }) => (
  <div style={{ height: '100%' }}>{children()}</div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
