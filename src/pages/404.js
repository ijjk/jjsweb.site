import React from 'react'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />

    <div className="fill v-middle-align">
      <div style={{ textAlign: 'left', marginTop: '-5%' }}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </>
)

export default NotFoundPage
