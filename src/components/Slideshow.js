import React, { Component } from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Chevron from '../assets/chevron-left.svg'

const fadeLength = 400 // in milliseconds

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
    }, fadeLength)
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
        style={{
          position: 'relative',
          userSelect: 'none',
        }}
        className={className}
      >
        <div className="blur" style={{ left: 0 }} />
        <Chevron className="chevron" onClick={this.prev} style={{ left: 10 }} />

        <Img
          key={active}
          fluid={imgs[active].node.childImageSharp.fluid}
          style={{
            opacity,
          }}
        />
        {/* load possible next image for smoother transition */}
        <Img
          key={next}
          fluid={imgs[next].node.childImageSharp.fluid}
          style={{
            width: 0,
            height: 0,
            opacity: 0,
          }}
        />

        <div
          style={{
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
                className="dot"
                style={{ opacity }}
                onClick={this.dotClick}
              />
            )
          })}
        </div>

        <div className="blur" style={{ right: 0 }} />
        <Chevron
          onClick={this.next}
          className="chevron"
          style={{ right: 10, transform: 'rotate(180deg)' }}
        />

        <style jsx>{`
          div :global(.gatsby-image-wrapper) {
            transition: opacity ${fadeLength}ms ease-in-out;
          }

          div :global(.chevron) {
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            height: 60px;
            width: 30px;
            z-index: 3;
            fill: white;
            cursor: pointer;
            opacity: 0.8;
            transition: opacity 150ms ease;
          }

          div :global(.chevron:hover) {
            opacity: 1;
          }

          div :global(.chevron:hover) {
            opacity: 0.6;
          }

          div :global(.dot) {
            width: 32px;
            height: 8px;
            opacity: 0.5;
            cursor: pointer;
            margin: 5px 4px;
            border-radius: 6px;
            display: inline-block;
            background: #000000;
            transition: all 250ms ease;
            box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
          }

          div :global(.dot:hover) {
            opacity: 0.75;
          }

          div :global(.blur) {
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 30%,
              rgba(0, 0, 0, 0.25) 50%,
              rgba(0, 0, 0, 0) 70%
            );
            position: absolute;
            height: 100%;
            width: 50px;
            z-index: 2;
            top: 0;
            pointer-events: none;
          }
        `}</style>
      </div>
    )
  }
}

Slideshow.propTypes = {
  className: PropTypes.any,
  imgs: PropTypes.array.isRequired, // childImageSharp nodes
}

export default Slideshow
