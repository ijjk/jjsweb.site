import React, { Component } from 'react'
import Chevron from './svgs/chevron-left'

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
      <div className="wrap-slideshow">
        <div className={`slideshow${className ? ' ' + className : ''}`}>
          <div className="blur left" />
          <Chevron
            className="chevron"
            onClick={this.prev}
            style={{ left: 10 }}
          />

          <img
            key={active}
            src={imgs[active]}
            style={{
              opacity,
            }}
          />
          {/* load possible next image for smoother transition */}
          <img
            key={next}
            src={imgs[next]}
            style={{
              width: 0,
              height: 0,
              opacity: 0,
            }}
          />

          <div className="blur right" />
          <Chevron
            onClick={this.next}
            className="chevron"
            style={{ right: 10, transform: 'rotate(180deg)' }}
          />

          <div className="dots">
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
        </div>

        <style jsx>{`
          .wrap-slideshow {
            text-align: center;
            margin-top: 10px;
          }

          .slideshow {
            display: inline-block;
            position: relative;
            width: 100%;
          }

          div img {
            transition: opacity ${fadeLength}ms ease-in-out;
            max-height: 400px;
            max-width: 800px;
            width: 100%;
            margin: 0;
          }

          div :global(.chevron) {
            margin: auto 0;
            height: 60px;
            width: 30px;
            z-index: 3;
            fill: white;
            cursor: pointer;
            opacity: 0.8;
            position: absolute;
            top: 0;
            bottom: 0;
            transition: opacity 150ms ease;
          }

          div :global(.chevron:hover) {
            opacity: 1;
          }

          div :global(.chevron:hover) {
            opacity: 0.6;
          }

          .dots {
            margin: 10px 0 0;
            width: 100%;
            text-align: center;
          }

          .dot {
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

          .dot:hover {
            opacity: 0.75;
          }

          .blur {
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 30%,
              rgba(0, 0, 0, 0.25) 50%,
              rgba(0, 0, 0, 0) 70%
            );
            height: 100%;
            width: 50px;
            pointer-events: none;
            position: absolute;
            top: 0;
          }
          .blur.left {
            left: 0;
          }
          .blur.right {
            right: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default Slideshow
