import React from 'react'
import { Link } from 'gatsby'

import { pathPrefix } from '../config'

// add active className when path matches partially
// for routes other than the base path e.g. / and
// exactly for the base path
const NavLink = ({ children, className, ...props }) => (
  <Link
    {...props}
    getProps={({ isPartiallyCurrent, isCurrent, href }) => {
      const isBase = href === pathPrefix
      if ((isBase && isCurrent) || (!isBase && isPartiallyCurrent)) {
        return {
          className: (className ? className + ' ' : '') + 'active',
        }
      }
      return {}
    }}
  >
    {children}
  </Link>
)

export default NavLink
