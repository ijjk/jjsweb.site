import React, { useState } from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'

const Field = ({ label, placeholder, type, ...props }) => {
  const isTextarea = type === 'textarea'
  return (
    <label>
      <div className="spacer" />
      {React.createElement(isTextarea ? 'textarea' : 'input', {
        ...props,
        required: true,
        type: isTextarea ? undefined : type || 'text',
        className: props.value.length > 0 ? 'not-empty' : undefined,
      })}
      <span className="label">{label}</span>
    </label>
  )
}

const formEndpoint = 'https://form.jjsweb.site'
const defaultErrorText = 'An error occurred sending message'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [error, setError] = useState(null)
  const [replyTo, setReplyTo] = useState('')
  const [message, setMessage] = useState('')
  const [pending, setPending] = useState(false)

  const clearForm = () => {
    setName('')
    setReplyTo('')
    setMessage('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (pending) return
    setPending(true)
    setError(null)
    fetch(formEndpoint, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ name, replyTo, message }),
    })
      .then(res => {
        if (res.status === 429) {
          return setError('You are sending too many messages')
        }
        return res.json()
      })
      .then(data => {
        setPending(false)
        if (!data) return
        if (data && data.status === 'ok') {
          clearForm()
          setError('Message sent!')
        } else {
          setError(data.message || defaultErrorText)
        }
      })
      .catch(err => {
        setPending(false)
        setError(defaultErrorText)
      })
  }

  return (
    <Layout>
      <SEO title="Contact" />

      <div className="fill">
        <div className="constrain">
          <div className="left">
            <h3>Contact me</h3>

            <form action={formEndpoint} method="POST" onSubmit={handleSubmit}>
              <Field
                name="name"
                value={name}
                maxLength={128}
                label="Your name*"
                onChange={e => setName(e.target.value)}
              />
              <Field
                type="text"
                name="replyTo"
                value={replyTo}
                maxLength={320}
                onChange={e => setReplyTo(e.target.value)}
                label="Your email or a handle: twitter:_ijjk*"
              />
              <Field
                rows={5}
                name="message"
                value={message}
                type="textarea"
                maxLength={1000}
                label="Your message*"
                onChange={e => setMessage(e.target.value)}
              />
              <input
                type="hidden"
                name="returnURL"
                value="https://jjsweb.site/contact"
              />

              {error && <p id="formErr">{error}</p>}

              <button className="btn" disabled={pending}>
                {pending ? <div className="spin" /> : 'Send'}
              </button>
            </form>
          </div>

          <div className="right">
            <blockquote>
              If you build it they will come, <br />
              if you build it well they will come back <br />
            </blockquote>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fill {
          margin: 30px 10px;
        }

        .constrain {
          width: 100%;
          display: flex;
          padding: 0 5%;
          margin: 0 auto;
          flex-wrap: wrap;
          max-width: 1200px;
          align-items: center;
        }

        blockquote {
          width: 100%;
          font-size: 18px;
          margin: 50px 0 10px;
        }

        .btn {
          margin-left: auto;
          padding: 6px 24px;
        }

        form {
          width: 275px;
        }

        #formErr {
          margin: 5px 0;
          line-height: 1;
        }

        form :global(label) {
          margin: 16px 0;
          display: block;
          position: relative;
        }

        form :global(label span:nth-child(1)),
        form :global(label input),
        form :global(label textarea) {
          display: block;
        }

        form :global(label input),
        form :global(label textarea) {
          width: 100%;
          border: none;
          padding: 4px 6px;
          background: transparent;
          border-bottom: 1px solid black;
        }

        form :global(label *:invalid) {
          /* hide red box-shadow in Firefox */
          box-shadow: none;
        }

        form :global(label textarea) {
          resize: none;
        }

        form :global(label .spacer) {
          width: 1px;
          height: 16px;
          margin-bottom: 5px;
        }

        form :global(.label) {
          opacity: 1;
          top: 24px;
          left: 6px;
          display: block;
          line-height: 1;
          font-size: 16px;
          position: absolute;
          transition: all 200ms ease;
        }

        form :global(label input:focus ~ .label),
        form :global(label input:valid ~ .label),
        form :global(label input.not-empty ~ .label),
        form :global(label textarea:focus ~ .label),
        form :global(label textarea:valid ~ .label),
        form :global(label textarea.not-empty ~ .label) {
          top: 0px;
          left: 0px;
        }

        @media (min-width: 600px) {
          .left {
            margin-right: 10%;
          }

          .right {
            flex: 1 1 0;
            display: flex;
            justify-content: center;
          }

          blockquote {
            width: auto;
            margin-top: -50px;
          }
        }
      `}</style>
    </Layout>
  )
}

export default ContactPage
