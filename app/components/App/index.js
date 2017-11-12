import React from 'react'
import Router from '../../router'

const App = ({ routes, history, initialParams, initialComponent, initialDependencies }) =>
  <Router
    routes={routes}
    history={history}
    initialParams={initialParams}
    initialComponent={initialComponent}
    initialDependencies={initialDependencies}
  />

export default App
