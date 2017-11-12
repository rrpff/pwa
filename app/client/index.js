import React from 'react'
import { hydrate } from 'react-dom'
import { createBrowserHistory } from 'history'
import App from '../components/App'
import routes from '../routes'
import getPage from '../pages'

const history = createBrowserHistory()
const root = document.getElementById('root')

getPage(window.initialComponentName).then(Component => {
  const tree =
    <App
      history={history}
      routes={routes}
      initialComponent={Component}
      initialParams={window.initialParams}
    />

  hydrate(tree, root)
})
