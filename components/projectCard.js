import React from 'react'
import Link from 'next/link'
import { thumbsPath } from '../config'
import ExtLink from '../components/extLink'

const ProjectCard = ({ projKey, name, stack, idx }) => (
  <div className="card" style={{ animationDelay: idx * 150 + 'ms' }}>
    <img src={`${thumbsPath}${projKey}/thumb.jpg`} className="thumb" />

    <div>
      <div className="name">
        <h4>{name}</h4>
        <Link href="/projects/[project]" as={`/projects/${projKey}`}>
          <a>
            Learn more<span className="hidden"> about {name}</span>
          </a>
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
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .card {
        opacity: 0;
        width: 95%;
        max-width: 375px;
        margin: 25px 10px;
        border-radius: 6px;
        background: #ffffff;
        animation: appear 700ms ease forwards;
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);
      }

      .card .thumb {
        width: 100%;
        height: 200px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }

      .card .thumb ~ div {
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
