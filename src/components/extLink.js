import React from 'react'

const ExtLink = ({ children, target, to, ...props }) => (
  <a href={to} rel="noopener noreferrer" target={target || '_blank'} {...props}>
    {children}
  </a>
)

export default ExtLink
