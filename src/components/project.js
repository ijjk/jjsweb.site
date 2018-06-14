import React, { Component } from 'react'
import Img from 'gatsby-image'

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
  display: 'inline-block',
  background: 'rgba(0, 0, 0, 0.8)',
  borderRadius: 4,
  transition: 'box-shadow 150ms ease-in-out',
  boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
  ':hover': {
    boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.5)',
  },
}

class Project extends Component {
  render() {
    const { imgs, data, ...props } = this.props
    return (
      <div {...props}>
        <h4 css={{ wordWrap: 'break' }}>{data.name}</h4>
        <Img
          sizes={imgs[0].node.childImageSharp.sizes}
          css={{
            margin: '10px 0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)',
          }}
        />
        <div>
          <p css={{ fontSize: 16, marginBottom: 5 }}>{data.blurb}</p>
          {data.stack.map(item => (
            <a
              href={stack[item]}
              key={item}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div css={stackItem}>{item}</div>
            </a>
          ))}
        </div>
      </div>
    )
  }
}

export default Project
