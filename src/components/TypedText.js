import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TypedText extends Component {
  state = {
    children: [],
    started: true,
    done: false,
  }

  getChildren = () => {
    let { children } = this.props
    if (typeof children === 'undefined') return []
    if (!Array.isArray(children)) children = [children]
    return children
  }

  addChild = child =>
    this.setState({
      children: this.state.children.concat(child),
    })

  addChar = (char, child) => {
    const { children } = this.state
    const isFirst = Boolean(child)
    child = child || children[this.childIdx]
    children[this.childIdx] = React.cloneElement(child, {
      children: isFirst ? char : child.props.children + char,
    })
    this.setState({ children })
  }

  started = () => {
    return new Promise(resolve => {
      if (this.state.started) return resolve()
      this.timeout = setTimeout(() => {
        this.started().then(() => resolve())
      }, this.typeSpeed)
    })
  }

  typeWait = () => {
    return new Promise(resolve => {
      this.timeout = setTimeout(() => {
        resolve()
      }, this.typeSpeed)
    })
  }

  nextChild = () => {
    this.charIdx = 0
    this.childIdx++
    return this.typeWait().then(() => this.typeChild())
  }

  nextChar = () => {
    this.charIdx++
    return this.typeWait().then(() => this.typeChild())
  }

  typeChild = () => {
    const children = this.getChildren()
    if (this.childIdx === children.length) {
      return Promise.resolve()
    }
    return this.started().then(() => {
      const curChild = children[this.childIdx]
      let chars = curChild.props ? curChild.props.children : null
      let hasText = typeof chars === 'string'
      // check if has text but is split into an array
      if (Array.isArray(chars)) {
        hasText = !chars.some(item => typeof item !== 'string')
        chars = chars.join(' ')
      }
      if (!hasText) {
        this.addChild(curChild)
        return this.nextChild()
      }
      const isFirstChar = this.charIdx === 0
      const isLastChar = this.charIdx === chars.length

      if (isLastChar) {
        return this.nextChild()
      } else if (isFirstChar) {
        this.addChild(curChild)
      }
      this.addChar(chars[this.charIdx], isFirstChar ? curChild : false)
      return this.nextChar()
    })
  }

  componentDidMount() {
    const { started, typeSpeed } = this.props
    this.typeSpeed = typeSpeed || 35
    this.childIdx = 0
    this.charIdx = 0
    this.typeChild().then(() => {
      this.setState({ done: true, started })
      if (typeof this.props.finished === 'function') {
        this.props.finished()
      }
    })
  }

  componentDidUpdate(prev) {
    const { started } = this.props
    if (prev.started === started) return
    this.setState({ started })
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { className, nonTyped, wrapEl } = this.props
    let { children } = this.state
    return React.createElement(
      wrapEl ? wrapEl : 'div',
      { className },
      children
        .concat(nonTyped)
        .map((el, key) => React.cloneElement(el, { key }))
    )
  }
}

TypedText.propTypes = {
  className: PropTypes.any, // allow object className from glamor
  started: PropTypes.bool,
  typeSpeed: PropTypes.number,
  finished: PropTypes.func,
  nonTyped: PropTypes.array, // elements that appear without being typed
  wrapEl: PropTypes.string, // element type for parent element
}

export default TypedText
