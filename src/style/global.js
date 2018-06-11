import { css } from 'glamor'
import { colors, fonts, fadeIn, fadeOut, spin } from './theme'
import 'glamor/reset'
import './css/caveat.css'

css.global('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
})

css.global('body', {
  background: colors.bodyBg,
  backgroundRepeat: 'no-repeat',
  color: colors.bodyFg,
})

css.global('html, body, #___gatsby', {
  minHeight: '100%',
})

css.global('a', {
  color: 'inherit',
})

// setup h1-6 tags
const sizes = [40, 32, 28, 24, 20, 16]
sizes.forEach((fontSize, i) => {
  css.global(`h${i + 1}`, { fontSize })
})

css.global('.page', {
  padding: '10px 20px',
  animation: `${fadeIn} 300ms ease-in-out forwards`,
})

css.global('.loadSlash', {
  height: 16,
  width: 8,
  display: 'inline-block',
  marginLeft: 5,
  animation: spin + ' 850ms steps(8, end) infinite',
})

css.global('.cursor', {
  height: 16,
  width: 8,
  display: 'inline-block',
  verticalAlign: 'middle',
  background: '#f4f5f6',
  animation: fadeOut + ' 1s steps(2, start) infinite forwards',
})
