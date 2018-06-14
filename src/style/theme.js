import { keyframes } from 'glamor'

export const colors = {
  bodyBg: ['#29323C', 'linear-gradient(60deg, #29323c 0%, #485563 100%)'],
  bodyFg: 'white',
  blue: '#4D9DE0',
}

export const fonts = {
  caveat: {
    fontFamily: 'Caveat, cursive',
  },
}

export const offScreen = {
  position: 'absolute',
  left: '-300%',
  top: '0',
}

export const media = {
  greaterThan(size) {
    return `@media (min-width: ${size}px)`
  },
  lessThan(size) {
    return `@media (max-width: ${size - 1}px)`
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
