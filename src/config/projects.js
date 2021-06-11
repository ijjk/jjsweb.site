const stackItem = (name, link) => ({ name, link })

// stack items
const styledJsx = stackItem('styled-jsx', 'https://github.com/zeit/styled-jsx')
const react = stackItem('React', 'https://github.com/facebook/react')
const nextJs = stackItem('Next.js', 'https://github.com/zeit/next.js')
const express = stackItem('Express', 'https://github.com/expressjs/express/')
const markdown = stackItem('markdown', 'https://en.wikipedia.org/wiki/Markdown')
const redux = stackItem('Redux', 'https://github.com/reduxjs/redux')
const mongo = stackItem('MongoDB', 'https://www.mongodb.com')
const socketIO = stackItem('Socket.io', 'https://socket.io')
const feathers = stackItem('Feathers', 'https://github.com/feathersjs/feathers')
const vanillaJS = stackItem(
  'VanillaJS',
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
)
const electron = stackItem('Electron', 'https://github.com/electron/electron')
const glamor = stackItem('glamor', 'https://github.com/threepointone/glamor')
const gatsby = stackItem('Gatsby', 'https://github.com/gatsbyjs/gatsby')

// projects
const config = {
  order: ['mykb', 'studentlife', 'sdsrf', 'countdowns'],

  mykb: {
    name: 'MYKB',
    projKey: 'mykb',
    repo: 'https://github.com/ijjk/mykb',
    demo: 'https://mykb.jjsweb.site',
    login: {
      Username: 'admin',
      Password: 'secretpass',
    },
    blurb:
      'MYKB is a file system/markdown based knowledge base editor/viewer. MYKB helps manage personal markdown based docs in a webui with automatic git committing.',
    stack: [styledJsx, react, nextJs, express, markdown],
    screens: ['home.jpg', 'doc.jpg', 'edit.jpg', 'new.jpg'],
  },

  studentlife: {
    name: 'STUDENTLIFE',
    projKey: 'studentlife',
    repo: 'https://github.com/ijjk/studentlife',
    blurb:
      'STUDENTLIFE is a school based social network to get updated on news from other students and teachers, and to access opportunities and resources.',
    stack: [react, redux, mongo, socketIO, feathers],
    screens: ['landing.jpg', 'home.jpg', 'resources.jpg', 'admin-panel.jpg'],
  },

  sdsrf: {
    projKey: 'sdsrf',
    name: 'SDS Research Fund',
    demo: 'https://sdsrf.jjsweb.site',
    repo: 'https://github.com/ijjk/sdsrf',
    blurb:
      'SDS Research Fund is a non-profit that hopes to increase the funds being raised for research towards a cure for Shwachman Diamond Syndrome.',
    stack: [react, gatsby, glamor, markdown],
    screens: ['home.jpg', 'board.jpg', 'blog.jpg', 'member-sign-up.jpg'],
  },

  countdowns: {
    name: 'Countdowns',
    projKey: 'countdowns',
    repo: 'https://github.com/ijjk/countdowns',
    blurb:
      'Countdowns is a customizable countdowns app that helps you keep track of the amount of time until a certain date.',
    stack: [electron, vanillaJS],
    screens: ['edit.jpg', 'create.jpg', 'countdowns.jpg', 'dialog.jpg'],
  },
}

config.order.forEach(item => {
  config[item].screens = config[item].screens.map(screen => {
    return require(`../../public/projects/${item}/${screen}`).default
  })
})

export default config
