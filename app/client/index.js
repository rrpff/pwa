import React from 'react'
import { hydrate } from 'react-dom'
import { createBrowserHistory } from 'history'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import App from '../components/App'
import routes from '../routes'
import getPage from '../pages'
import manifest from '../manifest'

const history = createBrowserHistory()
const root = document.getElementById('root')

const gqlClient = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache()
})

getPage(gqlClient, manifest, window.initialComponentName).then(({ component, dependencies }) => {
  const tree =
    <App
      history={history}
      routes={routes}
      initialComponent={component}
      initialDependencies={dependencies}
      initialParams={window.initialParams}
      initialData={window.initialData}
      gqlClient={gqlClient}
    />

  hydrate(tree, root)
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    }, function (err) {
      console.log('ServiceWorker registration failed: ', err)
    })
  })
}
