import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../components/App'

const app = express()

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', function (req, res) {
  const contents = renderToString(<App />)

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
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('Running on http://localhost:3000')
})
