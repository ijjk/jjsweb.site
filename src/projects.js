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
export default {
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
    imgOrder: ['thumb', 'doc', 'edit', 'new'],
    stack: [styledJsx, react, nextJs, express, markdown],
  },

  studentlife: {
    name: 'STUDENTLIFE',
    projKey: 'studentlife',
    repo: 'https://github.com/ijjk/studentlife',
    demo: 'https://sl.jjsweb.site',
    login: {
      Username: 'admin',
      Password: 'pass',
    },
    blurb:
      'STUDENTLIFE is a school based social network to get updated on news from other students and teachers, and to access opportunities and resources.',
    imgOrder: ['thumb', 'home', 'resources', 'admin-panel'],
    stack: [react, redux, mongo, socketIO, feathers],
  },

  sdsrf: {
    projKey: 'sdsrf',
    name: 'SDS Research Fund',
    demo: 'https://sdsrf.jjsweb.site',
    repo: 'https://github.com/ijjk/sdsrf',
    blurb:
      'SDS Research Fund is a non-profit that hopes to increase the funds being raised for research towards a cure for Shwachman Diamond Syndrome.',
    imgOrder: ['thumb', 'board', 'blog', 'member-sign-up'],
    stack: [react, gatsby, glamor, markdown],
  },

  countdowns: {
    name: 'Countdowns',
    projKey: 'countdowns',
    repo: 'https://github.com/ijjk/countdowns',
    blurb:
      'Countdowns is a customizable countdowns app that helps you keep track of the amount of time until a certain date.',
    imgOrder: ['thumb', 'create', 'countdowns', 'dialog'],
    stack: [electron, vanillaJS],
  },
}
