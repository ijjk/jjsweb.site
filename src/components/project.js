import React from 'react'
import Slideshow from './slideshow'

const stack = {
  electron: 'https://github.com/electron/electron',
  feathersjs: 'https://feathersjs.com/',
  gatsby: 'https://github.com/gatsbyjs/gatsby',
  glamor: 'https://github.com/threepointone/glamor',
  markdown: 'https://en.wikipedia.org/wiki/Markdown',
  mongodb: 'https://www.mongodb.com/',
  'next.js': 'https://github.com/zeit/next.js',
  react: 'https://reactjs.org',
  redux: 'https://redux.js.org',
  sass: 'https://sass-lang.com',
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
    <Slideshow
      {...{ imgs }}
      css={{
        margin: '10px 0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)',
      }}
    />
    <div>
      <p css={{ fontSize: 16, marginBottom: 5 }}>{data.blurb}</p>
      <ul css={{ listStyle: 'none' }}>
        {data.stack.map(item => (
          <li css={{ display: 'inline-block' }} key={item}>
            <a
              href={stack[item]}
              key={item}
              target="_blank"
              rel="noopener noreferrer"
              css={stackItem}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Project
