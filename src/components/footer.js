import React from 'react'
import { css } from 'glamor'
import { colors, media, offScreen } from '../style/theme'
import ExtLink from './extLink'

const formProps = global.netlifyProps || {}
const fieldStyle = css({
  background: '#171c21',
  color: colors.bodyFg,
  fontFamily: 'inherit',
  border: 'none',
  resize: 'none',
  borderRadius: 4,
  padding: '10px 5px',
  width: '100%',
  boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
  transition: 'box-shadow 150ms ease-in-out',
  ':hover': {
    boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.25)',
  },
  '::placeholder': {
    color: 'white',
    opacity: 0.9,
  },
})

const Field = ({
  inline,
  label,
  maxLength,
  name,
  placeholder,
  required,
  type,
}) => (
  <div
    css={{
      margin: '10px 10px 0 0',
      display: inline ? 'inline-block' : 'block',
      minWidth: inline ? 'calc(50% - 10px)' : null,
      [media.lessThan(1020)]: {
        display: 'block',
        minWidth: null,
      },
    }}
  >
    <label
      htmlFor={name}
      css={{
        display: 'block',
        margin: '0 0 5px',
      }}
    >
      {label ? label : placeholder}:
    </label>
    {React.createElement(type === 'textarea' ? 'textarea' : 'input', {
      maxLength,
      name,
      placeholder,
      required,
      id: name,
      type: type === 'textarea' ? null : 'input',
      className: fieldStyle,
      style: type === 'textarea' ? { height: 100 } : {},
    })}
  </div>
)

const iconStyle = {
  fill: colors.bodyFg,
  height: 20,
  margin: '0 10px -2px',
}

const Footer = () => (
  <footer
    css={{
      padding: '0 20px 75px',
    }}
  >
    <div
      css={{
        padding: '0 10%',
        [media.lessThan(450)]: {
          padding: '0 0',
        },
      }}
    >
      <h4 css={{ marginBottom: 10 }}>
        Contact
        <a href="mailto:jj@jjsweb.site" alt="contact email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            css={iconStyle}
          >
            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
          </svg>
        </a>
        <ExtLink href="https://github.com/ijjk">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            css={iconStyle}
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </ExtLink>
      </h4>
      <hr css={{ maxWidth: 550 }} />
      <form
        name="contact"
        method="post"
        css={{
          margin: '20px 0 40px',
          maxWidth: 900,
        }}
        {...formProps}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input name="somefield" type="text" css={offScreen} />
        <Field
          type="text"
          label="Name*"
          placeholder="Your name e.g. John Deux"
          name="name"
          inline
          required
        />
        <Field
          type="email"
          label="Email"
          placeholder="Email to reply to e.g. JDeuxy@gmail.com"
          name="email"
          inline
        />
        <Field
          type="textarea"
          label="Message*"
          placeholder="Your message..."
          name="message"
          required
        />
        <button
          type="submit"
          css={{
            background: colors.blue,
            fontFamily: 'inherit',
            fontSize: 18,
            cursor: 'pointer',
            padding: '5px 15px',
            margin: '10px 10px',
            float: 'right',
            border: 'none',
            borderRadius: 3,
            color: 'white',
            boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
            transition: 'box-shadow 150ms ease-in-out',
            ':hover': {
              boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.25)',
            },
            ':active': {
              outline: 0,
              boxShadow: 'inset 0 4px 8px #3a78ab',
            },
          }}
        >
          Submit
        </button>
      </form>
    </div>
  </footer>
)

export default Footer
