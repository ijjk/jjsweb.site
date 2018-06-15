import React, { Component } from 'react'
import { navigateTo } from 'gatsby-link'
import TypedText from '../components/typedText'
import ExtLink from '../components/extLink'
import { fadeOut } from '../style/theme'

class IndexPage extends Component {
  state = {
    started: false,
    loading: false,
    done: false,
    ip: '192.168.1.123',
  }

  numLines = 8
  done = () => {
    this.setState({ loading: true, started: false })
    this.timeout = setTimeout(() => {
      this.setState({ done: true })
      this.timeout = setTimeout(() => navigateTo('/home'), 360)
    }, 1000)
  }

  componentDidMount() {
    if (window.location.hostname !== 'localhost') {
      fetch('https://api.ipify.org')
        .then(res => {
          res.ok &&
            res.text().then(ip => {
              this.setState({ ip })
            })
        })
        .catch(() => {}) // just leave dummy ip
    }
    this.timeout = setTimeout(() => {
      this.setState({ started: true })
    }, 350)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { done, ip, loading, started } = this.state
    const repo = 'https://github.com/ijjk/jjsweb.site'
    const nonTyped = [
      <i className={loading ? 'loadSlash' : 'cursor'}>
        {loading ? '/' : null}
      </i>,
    ]

    return (
      <div
        css={{
          display: 'flex',
          height: '100%',
          padding: '25px',
          animation: !done ? '' : fadeOut + ' 300ms ease-in-out forwards',
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <noscript>
            <p>For the full experience please enable Javascript. Continue -> <a href='/home'>/home</a>  
          </noscript>`,
          }}
        />

        <TypedText wrapEl="p" finished={this.done} {...{ started, nonTyped }}>
          <span>Welcome to jjsweb.site v1.0.0 (gatsbyjs/gatsby v1.9.247)</span>
          <br />
          <br />
          <span> * Source code: </span>
          <ExtLink to={repo}>{repo}</ExtLink>
          <br />
          <span> * Contact: JJ Kasper </span>
          <a href="mailto:jj@jjsweb.site">{'<jj@jjsweb.site>'}</a>
          <br />
          <br />
          <span>
            Last login: {new Date().toString()} from {ip}
          </span>
          <br />
          <br />
          <span>Loading GUI... </span>
        </TypedText>
      </div>
    )
  }
}

export default IndexPage
