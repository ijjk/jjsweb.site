import React from 'react'
import Page from '../components/page'
import Link from 'gatsby-link'
import TypedText from '../components/typedText'

const NotFoundPage = () => {
  const css = { marginBottom: 15 }
  return (
    <Page key="page">
      <div
        css={{ textAlign: 'center', fontFamily: 'monospace', margin: '10% 0' }}
      >
        <TypedText started wrapEl="div">
          <h2 {...{ css }}>Err 404... NOT FOUND</h2>
          <p {...{ css }}>Welp you broke the site... How could you..</p>
          <Link to="/home">Fix it -> Home</Link>
        </TypedText>
      </div>
    </Page>
  )
}

export default NotFoundPage
