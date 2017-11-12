import React from 'react'
import Router from '../../router'

const App = ({ routes, history, initialParams, initialComponent }) =>
  <Router
    routes={routes}
    history={history}
    initialParams={initialParams}
    initialComponent={initialComponent}
  />

export default App
