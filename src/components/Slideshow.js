import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Chevron from './Chevron'
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
  pointerEvents: 'none',
})

const dot = css({
  width: 32,
  height: 8,
  borderRadius: 3,
  background: 'white',
  opacity: 0.5,
  cursor: 'pointer',
  display: 'inline-block',
  margin: '5px 4px',
  boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
  transition: 'all 250ms ease',
  ':hover': {
    opacity: 0.75,
  },
})

class Slideshow extends Component {
  state = {
    active: 0,
    opacity: 1,
  }

  updSlide = (advance, nextIdx) => {
    clearTimeout(this.timeout)
    const { active } = this.state
    const numImgs = this.props.imgs.length

    if (typeof nextIdx === 'undefined') {
      nextIdx = advance ? active + 1 : active - 1
    }

    if (nextIdx >= numImgs) {
      nextIdx = 0
    } else if (nextIdx < 0) {
      nextIdx = numImgs - 1
    }
    this.setState({ opacity: 0 })
    this.timeout = setTimeout(() => {
      this.setState({ active: nextIdx })
      this.timeout = setTimeout(() => {
        this.setState({ opacity: 1 })
      }, 50)
    }, 325)
  }
  prev = () => this.updSlide()
  next = () => this.updSlide(true)
  dotClick = e => this.updSlide(false, parseInt(e.currentTarget.id, 10))
  componentWillUnmount = () => clearTimeout(this.timeout)

  render() {
    const { className, imgs } = this.props
    const { active, opacity } = this.state
    const next = active < imgs.length - 1 ? active + 1 : 0

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
        {/* load possible next image for smoother transition */}
        <Img
          sizes={imgs[next].node.childImageSharp.sizes}
          style={{
            height: 0,
            width: 0,
          }} 
        />

        <div
          css={{
            margin: '10px 0 0',
            textAlign: 'center',
          }}
        >
          {imgs.map((_, idx) => {
            const opacity = idx === active ? 1 : null
            return (
              <div
                id={idx}
                key={idx}
                className={dot}
                style={{ opacity }}
                onClick={this.dotClick}
              />
            )
          })}
        </div>

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
