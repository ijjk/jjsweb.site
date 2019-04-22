import React from 'react'

import projects from '../../config/projects'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import ProjectCard from '../../components/projectCard'

const Projects = () => (
  <Layout>
    <SEO title="Projects" />

    <div className="fill">
      <div>
        <div className="cards">
          {projects.order.map((key, idx) =>
            React.createElement(ProjectCard, {
              ...projects[key],
              idx,
              key,
            })
          )}
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
