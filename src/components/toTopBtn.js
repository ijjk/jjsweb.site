import React, { Component } from 'react'

class ToTopBtn extends Component {
  state = {
    show: false,
  }

  checkShow = () => {
    if (window.scrollY >= 1080 && !this.state.show) {
      this.setState({ show: true })
    } else if (window.scrollY < 1080 && this.state.show) {
      this.setState({ show: false })
    }
  }

  toTop = () => {
    window.scrollTo(0, 0)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.checkShow)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkShow)
  }

  render() {
    const { show } = this.state
    return (
      <div
        onClick={this.toTop}
        css={{
          display: show ? 'block' : 'none',
          position: 'fixed',
          bottom: 25,
          right: 20,
          zIndex: 50,
          padding: '5px 10px',
          color: '#fff',
          textAlign: 'center',
          borderRadius: 3,
          cursor: 'pointer',
          background: 'rgba(0, 0, 0, 0.7)',
          fontSize: 14,
          transition: 'all 150ms ease-in-out',
          boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
        }}
      >
        To top
      </div>
    )
  }
}
export default ToTopBtn
