import React from 'react'

const externalProps = {
  rel: 'noopener noreferrer',
  target: '_blank',
}

export default function ExtLink({ children, ...props }) {
  return React.createElement(
    'a',
    {
      ...(props.href.indexOf('mailto') === -1 ? externalProps : {}),
      ...props,
    },
    children
  )
}
