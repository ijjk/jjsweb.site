import { keyframes } from 'glamor'

export const colors = {
  bodyBg: ['#29323C', 'linear-gradient(60deg, #29323c 0%, #485563 100%)'],
  // bodyBg: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
  // bodyFg: '#f4f5f6',
  bodyFg: 'white',
}

export const fonts = {
  mono: {
    fontFamily: 'monospace',
  },
  roboto: {
    fontFamily: 'Roboto,Helvetica Neue,Helvetica,Arial,sans-serif',
  },
  caveat: {
    fontFamily: 'Caveat, cursive',
  },
}

export const fadeIn = keyframes('fadeIn', {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const fadeOut = keyframes('fadeOut', {
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

export const spin = keyframes('spin', {
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})
