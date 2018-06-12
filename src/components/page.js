import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'

const Page = ({ children, noFooter, ...props }) => (
  <div {...props}>
    <Header />
    <div className="page">{children}</div>
    {noFooter ? null : <Footer />}
  </div>
)

export default Page
