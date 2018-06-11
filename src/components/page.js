import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import particles from '../config/particles'
if (typeof window !== 'undefined') {
  require('particles.js')
}

class Page extends Component {
  state = {
    particlesOpacity: 0,
  }
  componentDidMount() {
    if (this.props.noParticles) return
    this.timeout = setTimeout(() => {
      window.particlesJS('particles', particles)
      this.setState({ particlesOpacity: 1 })
    }, 1250)
  }
  componentWillUnmount = () => clearTimeout(this.timeout)

  render() {
    const { particlesOpacity } = this.state
    const { children } = this.props
    return (
      <div>
        <div
          id="particles"
          css={{
            '& canvas': {
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: particlesOpacity,
              transition: 'opacity 450ms ease-in-out',
              zIndex: 1,
              pointerEvents: 'none',
            },
          }}
        />
        <Header />
        <div className="page">{children}</div>
      </div>
    )
  }
}

Page.propTypes = {
  noParticles: PropTypes.bool,
}

export default Page
