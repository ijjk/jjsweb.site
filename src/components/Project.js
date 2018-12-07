import React from 'react'
import Slideshow from './Slideshow'
import ExtLink from './ExtLink'

const stack = {
  electron: 'https://electronjs.org',
  express: 'https://expressjs.com',
  feathersjs: 'https://feathersjs.com',
  gatsby: 'https://gatsbyjs.org',
  glamor: 'https://github.com/threepointone/glamor',
  markdown: 'https://en.wikipedia.org/wiki/Markdown',
  mongodb: 'https://www.mongodb.com/',
  'next.js': 'https://nextjs.org',
  react: 'https://reactjs.org',
  redux: 'https://redux.js.org',
  'styled-jsx': 'https://github.com/zeit/styled-jsx',
  vanillajs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
}

const stackItem = {
  cursor: 'pointer',
  padding: '8px 10px',
  margin: '5px 5px 5px 0',
  display: 'block',
  background: 'rgba(0, 0, 0, 0.8)',
  borderRadius: 4,
  textDecoration: 'none',
  transition: 'box-shadow 150ms ease-in-out',
  boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
  ':hover': {
    boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.5)',
  },
}
const Project = ({ imgs, data, ...props }) => (
  <div
    {...props}
    css={{
      position: 'relative',
    }}
  >
    <h4 css={{ wordWrap: 'break' }}>{data.name}</h4>
    <Slideshow {...{ imgs }} css={{ margin: '10px 0' }} />
    <div>
      <p css={{ marginBottom: 5 }}>{data.blurb}</p>
      <ul css={{ listStyle: 'none' }}>
        {data.stack.map(item => (
          <li css={{ display: 'inline-block' }} key={item}>
            <ExtLink key={item} css={stackItem} to={stack[item]}>
              {item}
            </ExtLink>
          </li>
        ))}
      </ul>
      {!data.repo ? null : (
        <ExtLink
          href={data.repo}
          css={{
            margin: '15px 15px 0 0',
            display: 'inline-block',
          }}
        >
          Source
        </ExtLink>
      )}
      {!data.demo ? null : (
        <ExtLink href={data.demo} css={{ display: 'inline-block' }}>
          Live
        </ExtLink>
      )}
      {!data.login.username ? null : (
        <div css={{ marginTop: 15 }}>
          <p css={{ marginBottom: 5 }}>Demo login: </p>
          <p>Username: {data.login.username}</p>
          <p>Password: {data.login.password}</p>
        </div>
      )}
    </div>
  </div>
)

export default Project
