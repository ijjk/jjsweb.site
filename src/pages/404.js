import React from 'react'
import Page from '../components/page'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <Page key="page">
    <div css={{ textAlign: 'center' }}>
      <h1>Err 404... NOT FOUND</h1>
      <p css={{ marginBottom: 15 }}>
        Welp you broke the site... How could you..
      </p>
      <Link to="/home">Fix it -> Home</Link>
    </div>
  </Page>
)

export default NotFoundPage
