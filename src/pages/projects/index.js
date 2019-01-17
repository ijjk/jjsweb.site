import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import projects from '../../projects'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import ProjectCard from '../../components/projectCard'

const Projects = () => (
  <Layout>
    <SEO title="Projects" />

    <div className="fill">
      <div>
        <div className="cards">
          <StaticQuery
            query={graphql`
              query {
                thumbs: allFile(
                  filter: { relativePath: { regex: "/projects.*?thumb/" } }
                ) {
                  edges {
                    node {
                      relativePath
                      childImageSharp {
                        fluid(maxWidth: 300) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            `}
            render={data => {
              return projects.order.map((key, idx) =>
                React.createElement(ProjectCard, {
                  ...projects[key],
                  idx,
                  key,
                  thumb: data.thumbs.edges.find(
                    ({ node }) => node.relativePath.indexOf(key) > -1
                  ).node,
                })
              )
            }}
          />
        </div>
      </div>
    </div>

    <style jsx>{`
      .cards {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        max-width: 1080px;
        margin: 20px auto;
        justify-content: space-evenly;
      }
    `}</style>
  </Layout>
)

export default Projects
