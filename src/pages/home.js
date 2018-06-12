import React from 'react'
import Page from '../components/page'
import Project from '../components/project'
import { media } from '../style/theme'

const Home = ({ data }) => {
  let { imgs, projects } = data
  ;(imgs = imgs.edges), (projects = projects.edges)

  return (
    <Page key="page">
      <div
        css={{
          padding: '0 10%',
          [media.lessThan(450)]: {
            padding: '0',
          },
        }}
      >
        {projects.map(({ node }) => {
          const { screensDir } = node
          const curImgs = imgs.filter(({ node }) => {
            const { relativePath } = node
            const dirLen = screensDir.length
            return (
              relativePath.length > dirLen &&
              relativePath.substr(0, dirLen) === screensDir
            )
          })
          return (
            <Project
              key={node.name}
              imgs={curImgs}
              data={node}
              css={{ marginBottom: 50 }}
            />
          )
        })}
      </div>
    </Page>
  )
}
export default Home

export const query = graphql`
  query HomeQ {
    imgs: allFile(filter:{absolutePath:{regex: "/data\/.*\\.(jpg|jpeg|png)/"}}) {
      edges {
        node {
          relativePath
          childImageSharp {
            sizes(maxWidth: 690) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    projects: allProjectsJson {
      edges {
        node {
          name
          screensDir
          blurb
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
