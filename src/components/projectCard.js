import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import ExtLink from '../components/extLink'

const ProjectCard = ({ projKey, name, stack, thumb, idx }) => (
  <div className="card" style={{ animationDelay: idx * 75 + 'ms' }}>
    <Img fluid={thumb.childImageSharp.fluid} className="thumb" />

    <div>
      <div className="name">
        <h4>{name}</h4>
        <Link to={`/projects/${projKey}`}>
          Learn more<span className="hidden"> about {name}</span>
        </Link>
      </div>
      <div className="stack">
        {stack.map(({ name, link }) => (
          <ExtLink href={link} key={name}>
            <div className="pill">{name}</div>
          </ExtLink>
        ))}
      </div>
    </div>

    <style jsx>{`
      @keyframes appear {
        from {
          transform: scale(0);
        }
        to {
          transform: scale(1);
        }
      }

      .card {
        width: 95%;
        max-width: 375px;
        margin: 25px 10px;
        border-radius: 6px;
        transform: scale(0);
        background: #ffffff;
        animation: appear 300ms cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);
      }

      .card :global(.thumb) {
        height: 200px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }

      .card :global(.thumb) ~ div {
        display: flex;
        padding: 5px 5px 10px;
        align-items: flex-start;
      }

      .card h4 {
        margin: 0;
      }

      .card .name {
        padding: 5px 10px 10px 0;
      }

      .card .stack {
        flex: 1 1 0;
        flex-wrap: wrap;
        display: inline-flex;
        justify-content: center;
      }
    `}</style>
  </div>
)

export default ProjectCard
