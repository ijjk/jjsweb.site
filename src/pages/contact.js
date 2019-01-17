import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'

const updateEmptyStatus = e => {
  const el = e.target
  const method = el.value.length ? 'add' : 'remove'
  el.classList[method]('not-empty')
}

const Field = ({ label, placeholder, type, ...props }) => {
  const isTextarea = type === 'textarea'
  return (
    <label>
      <div className="spacer" />
      {React.createElement(isTextarea ? 'textarea' : 'input', {
        ...props,
        required: true,
        onChange: updateEmptyStatus,
        type: isTextarea ? undefined : type || 'text',
      })}
      <span className="label">{label}</span>
    </label>
  )
}

const NotFoundPage = () => (
  <Layout>
    <SEO title="Contact" />

    <div className="fill">
      <div className="constrain">
        <div className="left">
          <h3>Contact me</h3>

          <form>
            <Field label="Your name*" name="name" maxLength={128} />
            <Field
              type="text"
              name="replyTo"
              maxLength={320}
              label="Your email or a handle: twitter:_ijjk*"
            />
            <Field
              label="Your message*"
              name="message"
              type="textarea"
              rows={5}
              maxLength={1000}
            />
            <button className="btn">Send</button>
          </form>
        </div>

        <div className="right">
          <blockquote>
            If you build it they will come, <br />
            if you build it well they will come back <br />
            <br />- Anonymous
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

export default NotFoundPage
