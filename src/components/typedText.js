import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TypedText extends Component {
  state = {
    children: [],
    started: false,
    done: false,
  }
  typeSpeed = this.props.typeSpeed || 35 // the time per char
  typeDone = // callback when done typing
    typeof this.props.typeDone === 'function' ? this.props.typeDone : () => {}

  // if typing is stopped wait for start
  started = () => {
    return new Promise(resolve => {
      if (this.state.started) return resolve()
      this.timeout = setTimeout(() => {
        this.started().then(() => resolve())
      }, this.typeSpeed)
    })
  }

  addChild = (child, noText) => {
    const { children } = this.state
    const props = noText ? {} : { children: '' }
    children.push(
      React.cloneElement(child, {
        ...props,
        key: this.childIdx,
      })
    )
    this.setState({ children })
    return noText
  }

  childIdx = 0
  addChar = char => {
    const { children } = this.state
    const child = children[this.childIdx]
    children[this.childIdx] = React.cloneElement(child, {
      children: child.props.children + char,
    })
    this.setState({ children })
  }

  charIdx = 0
  typeChild = () => {
    let child, chars
    return new Promise(resolve => {
      this.started()
        .then(() => {
          child = this.getChildren()[this.childIdx]
          chars = child.props.children
          let isText = typeof chars === 'string'
          if (!isText && Array.isArray(child.props.children)) {
            isText = !child.props.children.some(
              child => typeof child !== 'string'
            )
            chars = chars.join(' ')
          }
          if (!isText || this.charIdx === 0) {
            return this.addChild(child, !isText)
          }
        })
        .then(done => {
          if (done) return
          this.addChar(chars[this.charIdx])
          return this.nextChar(chars)
        })
        .then(() => resolve())
    })
  }

  nextChar = chars => {
    return new Promise(resolve => {
      this.charIdx++
      if (this.charIdx === chars.length) {
        return resolve()
      }
      this.timeout = setTimeout(() => {
        this.typeChild().then(() => resolve())
      }, this.typeSpeed)
    })
  }

  getChildren = () => {
    let { children } = this.props
    if (!Array.isArray(children)) children = [children]
    return children
  }

  typeOne = () => {
    return this.typeChild().then(() => {
      this.childIdx++
      this.charIdx = 0
      if (this.childIdx < this.getChildren().length) {
        return this.typeOne()
      }
    })
  }

  componentDidMount() {
    if (this.state.started !== this.props.started) {
      this.setState({ started: this.props.started })
    }
    this.typeOne().then(() => {
      this.setState({ done: true })
      this.typeDone()
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
    this.setState({ started: false })
  }

  componentWillReceiveProps(nextProps, state) {
    if (nextProps.started !== this.state.started) {
      return this.setState({ started: nextProps.started })
    }
  }

  render() {
    let { className, typingClassName, finishedClassName, wrapEl } = this.props
    const { children, done } = this.state
    if (done) typingClassName = ''
    return React.createElement(wrapEl || 'p', {
      className:
        (className || '') +
        ' ' +
        (typingClassName || '') +
        ' ' +
        (finishedClassName || ''),
      children,
    })
  }
}

TypedText.propTypes = {
  className: PropTypes.any, // allow object className from glamor
  typingClassName: PropTypes.any,
  finishedClassName: PropTypes.any,
  started: PropTypes.bool,
  typeDone: PropTypes.func,
  typeSpeed: PropTypes.number,
}

export default TypedText
