import React from 'react'
import PropTypes from 'prop-types'
import 'normalize.css/normalize.css'

import '../styles/roboto.css'
import Header from './header'
import Footer from './footer'
import theme from '../styles/theme'

const Layout = ({ children }) => (
  <div className="wrap">
    <Header />

    {children}

    <Footer />

    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      html,
      body {
        width: 100vw;
        height: 100vh;
        color: #000000;
        background: #f6f6f6;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI',
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 0;
        font-weight: 500;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        max-width: 600px;
      }

      a {
        color: ${theme.active};
        text-decoration: none;
      }

      .wrap {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
      }

      .fill {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }

      .fill.v-middle-align {
        text-align: center;
        align-items: center;
        justify-content: center;
      }

      a span.hidden {
        top: -300%;
        left: -300%;
        position: fixed;
      }

      .btn {
        outline: 0;
        border: none;
        display: block;
        cursor: pointer;
        margin-top: 10px;
        border-radius: 6px;
        padding: 10px 26px;
        color: ${theme.primaryFg};
        background: ${theme.primary};
        transition: box-shadow 200ms ease-in-out;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
      }

      .btn:hover {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
      }

      .btn:active {
        box-shadow: inset 0 2px rgba(0, 0, 0, 0.25);
      }

      .btn .spin {
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 16px;
        background: transparent;
        border: 1px solid white;
        border-top-color: transparent;
        border-left-color: transparent;
        animation: spin 500ms linear infinite;
      }

      .pill {
        padding: 4px 10px;
        margin: 4px 4px 0;
        color: #ffffff;
        border-radius: 30px;
        background: #000000;
        transition: box-shadow 250ms ease-in-out;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
      }

      .pill:hover {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
