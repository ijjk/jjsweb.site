import React from 'react'
import Img from 'gatsby-image'

const Project = ({ imgs, data, ...props }) => {
  const inline = { display: 'inline' }
  const stackItem = {
    cursor: 'pointer',
    padding: '8px 10px',
    margin: '5px 5px 5px 0',
    display: 'inline-block',
    background: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 4,
    transition: 'box-shadow 350ms ease-in-out',
    boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
    ':hover': {
      boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.25)',
    },
  }
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
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <div css={stackItem}>{item.label}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Project
