import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createMemoryHistory } from 'history'
import App from '../components/App'
import routes from '../routes'

const app = express()

app.use(express.static(path.join(__dirname, '..', 'bundles')))
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(function (req, res) {
  const history = createMemoryHistory({ initialEntries: [req.path] })
  const match = routes.recognize(history.location.pathname)
  if (!match) return res.status(404).send('404')

  const route = match[0]
  const { get, name } = route.handler

  get().then(({ component, dependencies }) => {
    const contents = renderToString(
      <App
        routes={routes}
        history={history}
        initialComponent={component}
        initialParams={route.params}
        initialDependencies={dependencies}
      />
    )

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>PWA React Example</title>
        </head>
        <body>
          <div id="root">${contents}</div>
          <script>
            window.initialComponentName = '${name}'
            window.initialParams = ${JSON.stringify(route.params)}
          </script>
          <script src="/main.bundle.js"></script>
        </body>
      </html>
    `)
  })
})

app.listen(3000, () => {
  console.log('Running on http://localhost:3000')
})
