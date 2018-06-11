import React from 'react'
import PropTypes from 'prop-types'
import '../style/global'

const Layout = ({ children }) => (
  <div style={{ height: '100%' }}>{children()}</div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
