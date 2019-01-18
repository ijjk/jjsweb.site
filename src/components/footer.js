import React from 'react'

import theme from '../styles/theme'

const Footer = () => (
  <footer>
    JJ Kasper - {new Date().getFullYear()}
    <style jsx>{`
      footer {
        padding: 12px 10px;
        text-align: center;
        color: ${theme.footerFg};
        background: ${theme.footerBg};
      }
    `}</style>
  </footer>
)

export default Footer
