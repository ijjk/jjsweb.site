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
  started = async () => {
    if (this.state.started) return
    return new Promise(resolve => {
      this.timeout = setTimeout(async () => {
        await this.started()
        resolve()
      }, this.typeSpeed)
    })
  }

  addChild = (child, noChild) => {
    const { children } = this.state
    const props = noChild ? {} : { children: '' }
    children.push(
      React.cloneElement(child, {
        ...props,
        key: this.childIdx,
      })
    )
    this.setState({ children })
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
  typeChild = async () => {
    await this.started()
    let child = this.getChildren()[this.childIdx]
    const childrenType = typeof child.props.children
    let allText = false
    if (Array.isArray(child.props.children)) {
      allText = !child.props.children.some(child => typeof child !== 'string')
      child = React.cloneElement(child, {
        children: child.props.children.join(' '),
      })
    }
    if (childrenType !== 'string' && !allText) {
      // child doesn't have text so just add it
      return this.addChild(child, true)
    }
    const chars = child.props.children
    if (this.charIdx === 0) {
      // add child to state so we can update it
      this.addChild(child)
    }
    this.addChar(chars[this.charIdx])
    await this.nextChar(child)
  }

  nextChar = async child => {
    this.charIdx++
    if (this.charIdx === child.props.children.length) return
    return new Promise(resolve => {
      this.timeout = setTimeout(async () => {
        await this.typeChild()
        resolve()
      }, this.typeSpeed)
    })
  }

  getChildren = () => {
    let { children } = this.props
    if (!Array.isArray(children)) children = [children]
    return children
  }

  async componentDidMount() {
    if (this.state.started !== this.props.started) {
      this.setState({ started: this.props.started })
    }
    for (let i = 0; i < this.getChildren().length; i++) {
      this.childIdx = i
      this.charIdx = 0
      await this.typeChild()
    }
    this.setState({ done: true })
    this.typeDone()
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
    this.setState({ started: false })
  }

  // async getDerivedStateFromProps (nextProps, state) {
  componentWillReceiveProps(nextProps, state) {
    if (nextProps.started !== this.state.started) {
      return this.setState({ started: nextProps.started })
    }
    // if (nextProps.started && !state.started) {
    // return { started: true }
    // }
    // return null
  }

  render() {
    let { className, typingClassName, finishedClassName } = this.props
    const { children, done } = this.state
    if (done) typingClassName = ''
    if (finishedClassName === typingClassName) finishedClassName = ''
    className = className || ''
    className += ' ' + typingClassName + ' ' + finishedClassName
    return <p {...{ className }}>{children}</p>
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
