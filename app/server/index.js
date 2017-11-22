import path from 'path'
import fs from 'fs'
import { promisify } from 'util'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createMemoryHistory } from 'history'
import marked from 'marked'
import LocalLink from './graphql/ApolloLocalLink'
import App from '../components/App'
import routes from '../routes'

const readFileAsync = promisify(fs.readFile)

const store = {
  posts: [
    {
      slug: 'pwa-react',
      title: 'Building a Progressive Web App with React',
      file: path.join(__dirname, '..', '..', 'posts', 'pwa-react.md')
    }
  ]
}

const schema = buildSchema(`
  type Query {
    posts: [Post],
    post(slug: String!): Post
  }

  type Post {
    slug: String,
    title: String,
    html: String
  }
`)

const root = {
  posts: () => store.posts.map(post => ({ title: post.title, slug: post.slug })),
  post: ({ slug }) => {
    const { title, file } = store.posts.find(s => s.slug === slug)
    return readFileAsync(file).then(buf => {
      const html = marked(buf.toString('utf-8'))
      return { title, slug, html }
    })
  }
}

const gqlClient = new ApolloClient({
  ssrMode: true,
  link: new LocalLink(schema, {}, root),
  cache: new InMemoryCache()
})

const app = express()

app.use(express.static(path.join(__dirname, '..', 'bundles')))
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.use(function (req, res) {
  const history = createMemoryHistory({ initialEntries: [req.path] })
  const match = routes.recognize(history.location.pathname)
  if (!match) return res.status(404).send('404')

  const route = match[0]
  const { get, name } = route.handler

  get(gqlClient, route.params).then(({ component, dependencies, data }) => {
    const contents = renderToString(
      <App
        routes={routes}
        history={history}
        initialComponent={component}
        initialParams={route.params}
        initialDependencies={dependencies}
        initialData={data}
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
            window.initialData = ${JSON.stringify(data)}
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
