import React from 'react'
import Router from '../../router'

const App = ({ routes, history, initialParams, initialComponent, initialDependencies, initialData, gqlClient }) =>
  <Router
    routes={routes}
    history={history}
    initialParams={initialParams}
    initialComponent={initialComponent}
    initialDependencies={initialDependencies}
    initialData={initialData}
    gqlClient={gqlClient}
  />

export default App
