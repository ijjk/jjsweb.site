import React from 'react'

import SEO from './seo'
import Layout from './layout'
import ExtLink from './extLink'
import Slideshow from './slideshow'
import { thumbsPath } from '../config'

export default function ProjectPage({
  blurb,
  demo,
  login,
  name,
  screens,
  projKey,
  repo,
  stack,
}) {
  screens = [...screens].map(screen => `${thumbsPath}${projKey}/${screen}`)

  return (
    <Layout>
      <SEO title={name} keywords={stack.map(s => s.name)} />

      <div className="fill">
        <div className="constrain">
          <h3>{name}</h3>
          <Slideshow imgs={screens} />
          <div className="info">
            <p>{blurb}</p>

            {demo && <ExtLink href={demo}>Demo</ExtLink>}
            {repo && demo && ' - '}
            {repo && <ExtLink href={repo}>Source code</ExtLink>}

            {login && (
              <div className="login">
                <h4>Demo login</h4>
                {Object.keys(login).map(loginKey => (
                  <p key={loginKey}>
                    {loginKey}: {login[loginKey]}
                  </p>
                ))}
              </div>
            )}

            <div className="stack">
              {stack.map(({ name, link }) => (
                <ExtLink href={link} key={name}>
                  <div className="pill">{name}</div>
                </ExtLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fill h3 {
          margin: 0 0 5px;
        }

        .fill .constrain {
          width: 95%;
          max-width: 800px;
          margin: 40px auto;
        }

        .login h4 {
          margin: 10px 0 5px;
        }

        .login p {
          margin: 5px 0;
        }

        .stack {
          display: flex;
          margin: 10px 0;
          flex-wrap: wrap;
          align-items: center;
          flex-direction: row;
        }

        .stack :global(.pill:nth-child(1)) {
          margin-left: 0;
        }
      `}</style>
    </Layout>
  )
}
