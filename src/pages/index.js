import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

const Index = () => (
  <Layout>
    <SEO title="Home" />

    <div className="fill v-middle-align">
      <h2>
        I USE PROGRAMMING
        <br />
        TO CREATE ENJOYABLE
        <br />
        EXPERIENCES THAT SOLVE
        <br />
        PROBLEMS AND I COOK A LITTLE
        <br />
      </h2>

      <Link to="/projects">
        <button className="btn">See Projects</button>
      </Link>
    </div>
  </Layout>
)

export default Index
