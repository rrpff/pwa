import React from 'react'
import PropTypes from 'prop-types'

class Link extends React.Component {
  handleClick (e) {
    e.preventDefault()

    const { location, push, replace } = this.context.router

    if (location.pathname === window.location.pathname) {
      replace(this.props.href)
    } else {
      push(this.props.href)
    }
  }

  render () {
    return (
      <a {...this.props} onClick={this.handleClick.bind(this)}></a>
    )
  }
}

Link.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Link
