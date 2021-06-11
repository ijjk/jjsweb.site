import React from 'react'
import Link from 'next/link'

import SEO from '../components/seo'

const Index = () => (
  <>
    <SEO title="Home" />

    <div className="fill v-middle-align">
      <h2 style={{ textTransform: 'uppercase' }}>
        I use programming
        <br />
        to create enjoyable
        <br />
        experiences that solve
        <br />
        problems and I cook a little
        <br />
      </h2>

      <Link href="/projects">
        <a>
          <button className="btn">See Projects</button>
        </a>
      </Link>
    </div>
  </>
)

export default Index
