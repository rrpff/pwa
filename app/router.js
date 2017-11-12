import React from 'react'
import PropTypes from 'prop-types'

class Router extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.routes = props.routes
    this.history = props.history
    this.state = {
      component: this.props.initialComponent,
      params: this.props.initialParams,
      dependencies: this.props.initialDependencies
    }
  }

  getChildContext () {
    return {
      router: this.getRouterContext()
    }
  }

  getRouterContext () {
    return {
      location: this.history.location,
      push: this.history.push.bind(this.history),
      replace: this.history.replace.bind(this.history),
      go: this.history.go.bind(this.history),
      goBack: this.history.goBack.bind(this.history),
      goForward: this.history.goForward.bind(this.history)
    }
  }

  componentDidMount () {
    this.updateRenderedLocation(this.history.location)
    this.unlisten = this.history.listen(location => {
      this.updateRenderedLocation(this.history.location)
    })
  }

  componentWillUnmount () {
    this.unlisten()
  }

  updateRenderedLocation (location) {
    const match = this.routes.recognize(location.pathname)
    const route = match[0]
    const { get, name } = route.handler

    get().then(({ component, dependencies }) => {
      this.setState({ component, dependencies, params: route.params })
    })
  }

  render () {
    return React.createElement(this.state.component, {
      params: this.state.params,
      dependencies: this.state.dependencies
    })
  }
}

Router.childContextTypes = {
  router: PropTypes.object.isRequired
}

export default Router
