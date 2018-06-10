import React from 'react'
import Link from 'gatsby-link'
import { keyframes } from 'glamor'
import { fonts } from '../style/theme'

const drawText = keyframes('drawLogoTxt', {
  from: {
    strokeDashoffset: 1000,
  },
  to: {
    strokeDashoffset: 0,
  },
})

const fadeFill = keyframes('fadeLogoTxt', {
  from: {
    fill: 'transparent',
  },
  to: {
    fill: 'white',
  },
})

const Header = () => (
  <div>
    <div
      css={{
        margin: '0 auto',
        padding: '10px 20px 20px',
      }}
    >
      <h2 css={{ margin: 0 }}>
        <Link to="/home" css={{ textDecoration: 'none' }}>
          <svg width="225" viewBox="0 0 230 67">
            <text
              x="10"
              y="50"
              fill="none"
              stroke="white"
              strokeWidth="1"
              fontSize="60"
              fontFamily={fonts.caveat.fontFamily}
              css={{
                strokeDasharray: 1000,
                strokeDashoffset: 1000,
                animation:
                  drawText +
                  ' 3s ease-in-out forwards, ' +
                  fadeFill +
                  ' 1.25s ease-in-out forwards',
              }}
            >
              jjsweb.site
            </text>
          </svg>
        </Link>
      </h2>
    </div>
  </div>
)

export default Header