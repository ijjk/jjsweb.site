import React, { Component } from 'react'
import { navigateTo } from 'gatsby-link'
import TypedText from '../components/typedText'
import { css } from 'glamor'
import { fadeOut } from '../style/theme'

class IndexPage extends Component {
  state = {
    loading: false,
    done: false,
    finishedIdx: -1,
    ip: '192.168.1.123',
  }

  numLines = 8
  typeDone = finishedIdx => {
    if (finishedIdx === this.numLines - 1) {
      this.setState({ loading: true })
      this.timeout = setTimeout(() => {
        this.setState({ done: true })
        this.timeout = setTimeout(() => navigateTo('/home'), 360)
      }, 1000)
    }
    this.timeout = setTimeout(() => {
      this.setState({ finishedIdx })
    }, 300)
  }
  // async componentDidMount () {
  //   const ipRes = await fetch('https://api.ipify.org')
  //     .catch(() => ({ ok: false }))
  //   if (ipRes.ok) {
  //     const ip = await ipRes.text()
  //     this.setState({ ip })
  //   }
  // }
  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { loading, done, finishedIdx, ip } = this.state
    const repo = 'https://github.com/ijjk/jjsweb.site'
    const typedLines = [
      <span>Welcome to jjsweb.site v1.0.0 (gatsbyjs/gatsby v1.9.247)</span>,
      <br />,
      [
        <span key="1"> * Source code: </span>,
        <a href={repo} rel="noopener noreferrer" target="_blank" key="2">
          {repo}
        </a>,
      ],
      [
        <span key="1"> * Contact: JJ Kasper </span>,
        <a key="2" href="mailto:jj@jjsweb.site">
          {'<jj@jjsweb.site>'}
        </a>,
      ],
      <br />,
      <span>
        Last login: {new Date().toString()} from {ip}
      </span>,
      <br />,
      <span>Loading GUI...</span>,
    ]
    return (
      <div
        css={{
          display: 'flex',
          height: '100%',
          fontFamily: 'monospace',
          padding: '25px',
          animation: !done ? '' : fadeOut + ' 300ms ease-in-out forwards',
        }}
      >
        <div css={{ width: '100%' }}>
          {typedLines.map((line, idx) => {
            const started = idx === finishedIdx + 1
            const isLast = idx === typedLines.length - 1
            const className = css({
              display: 'inline-block',
            })
            return (
              <TypedText
                {...{ started }}
                key={idx}
                typeDone={() => this.typeDone(idx)}
                typingClassName={className}
                finishedClassName={isLast ? className : ''}
              >
                {line}
              </TypedText>
            )
          })}
          <div className={loading ? 'loadSlash' : 'cursor'}>
            {loading ? '/' : null}
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
