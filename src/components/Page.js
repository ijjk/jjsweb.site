import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ToTopBtn from './ToTopBtn'

const Page = ({ children, noFooter, ...props }) => (
  <div {...props}>
    <Header />
    <ToTopBtn />
    <div className="page">{children}</div>
    {noFooter ? null : <Footer />}
  </div>
)

export default Page
