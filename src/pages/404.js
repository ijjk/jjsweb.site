import React from 'react'
import Page from '../components/page'
import Link from 'gatsby-link'
import TypedText from '../components/typedText'

const NotFoundPage = () => (
  <Page key="page">
    <div css={{ textAlign: 'center', fontFamily: 'monospace' }}>
      <TypedText started wrapEl="div">
        <h1>Err 404... NOT FOUND</h1>
        <p css={{ marginBottom: 25 }}>
          Welp you broke the site... How could you..
        </p>
        <Link to="/home">Fix it -> Home</Link>
      </TypedText>
    </div>
  </Page>
)

export default NotFoundPage
