import React from 'react'
import Page from '../components/page'
import Img from 'gatsby-image'

const Home = ({ data }) => {
  return (
    <Page key="page">
      <div css={{ padding: '0 15%' }}>
        <Img sizes={data.allImageSharp.edges[0].node.sizes} />
      </div>
    </Page>
  )
}
export default Home

export const query = graphql`
  query HomeQ {
    allImageSharp(limit: 50) {
      edges {
        node {
          sizes(maxWidth: 1280) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
    allProjectsJson {
      edges {
        node {
          name
          screensDir
          repo
          demo
          login {
            username
            password
          }
          stack {
            label
            link
          }
        }
      }
    }
  }
`
