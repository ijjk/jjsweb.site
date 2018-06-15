import React from 'react'
import { css } from 'glamor'
import { colors, media, offScreen } from '../style/theme'

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
            css={{
              fill: colors.bodyFg,
              height: 20,
              margin: '0 10px -2px',
            }}
          >
            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
          </svg>
        </a>
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
