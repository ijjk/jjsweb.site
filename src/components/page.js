import React from 'react'
import Header from './header'

const Page = ({ children }) => (
  <div>
    <Header />
    <div className="page">{children}</div>
  </div>
)

export default Page
