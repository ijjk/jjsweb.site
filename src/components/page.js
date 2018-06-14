import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'
import ToTopBtn from './toTopBtn'

const Page = ({ children, noFooter, ...props }) => (
  <div {...props}>
    <Header />
    <ToTopBtn />
    <div className="page">{children}</div>
    {noFooter ? null : <Footer />}
  </div>
)

export default Page
