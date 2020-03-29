import React from 'react'

import projects from '../../config/projects'
import ProjectPage from '../../components/projectPage'

export const getStaticProps = ({ params }) => {
  const projectProps = projects[params.project]

  return {
    props: {
      projectProps,
    },
  }
}

export const getStaticPaths = () => {
  return {
    paths: ['mykb', 'countdowns', 'sdsrf', 'studentlife'].map(
      project => `/projects/${project}`
    ),
    fallback: false,
  }
}

export default ({ projectProps }) => <ProjectPage {...projectProps} />
