import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Chevron from './chevron'
import { css } from 'glamor'

const chevronCss = css({
  position: 'absolute',
  top: 0,
  bottom: 0,
  margin: 'auto 0',
  height: 60,
  width: 30,
  zIndex: 3,
  fill: 'white',
  cursor: 'pointer',
  opacity: 0.8,
  transition: 'opacity 150ms ease',
  ':hover': {
    opacity: 1,
  },
  ':active': {
    opacity: 0.6,
  },
})

const blur = css({
  background:
    'linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0) 70%)',
  position: 'absolute',
  height: '100%',
  width: 50,
  zIndex: 2,
  top: 0,
})

class Slideshow extends Component {
  state = {
    active: 0,
    opacity: 1,
  }

  updSlide = advance => {
    const { active } = this.state
    const numImgs = this.props.imgs.length
    let nextIdx = advance ? active + 1 : active - 1

    if (nextIdx >= numImgs) {
      nextIdx = 0
    } else if (nextIdx < 0) {
      nextIdx = numImgs - 1
    }
    this.setState({ opacity: 0 })
    this.timeout = setTimeout(() => {
      this.setState({ active: nextIdx, opacity: 1 })
    }, 350)
  }
  next = () => this.updSlide(true)
  prev = () => this.updSlide()
  componentWillUnmount = () => clearTimeout(this.timeout)

  render() {
    const { className, imgs } = this.props
    const { active, opacity } = this.state
    return (
      <div
        {...{ className }}
        css={{
          position: 'relative',
          userSelect: 'none',
        }}
      >
        <div className={blur} css={{ left: 0 }} />
        <Chevron
          dir="left"
          className={chevronCss}
          css={{ left: 10 }}
          onClick={this.prev}
        />

        <Img
          sizes={imgs[active].node.childImageSharp.sizes}
          style={{
            opacity,
            transition: 'opacity 350ms ',
          }}
        />

        <div className={blur} css={{ right: 0 }} />
        <Chevron
          className={chevronCss}
          css={{ right: 10 }}
          onClick={this.next}
        />
      </div>
    )
  }
}

Slideshow.propTypes = {
  imgs: PropTypes.array.isRequired, // childImageSharp nodes
  className: PropTypes.any, // allow glamor object
}

export default Slideshow
