import React from 'react'
import Page from '../components/Page'
import Link from 'gatsby-link'

const NotFoundPage = () => {
  return (
    <Page key="page" noFooter>
      <div
        css={{
          textAlign: 'center',
          margin: '10% 0',
          '& h2, & p': {
            marginBottom: 15,
          },
        }}
      >
        <div>
          <h2>Err 404... NOT FOUND</h2>
          <p>Welp you broke the site... How could you..</p>
          <Link to="/home">{'Fix it -> Home'}</Link>
        </div>
      </div>
    </Page>
  )
}

export default NotFoundPage
