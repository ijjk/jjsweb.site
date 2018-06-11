import React, { Component } from 'react'
import Header from './header'

const Page = ({ children, ...props }) => (
  <div {...props}>
    <Header />
    <div className="page">{children}</div>
  </div>
)

export default Page
