import React from 'react'
import { render } from 'react-dom'

const App = () =>
  <div>
    This is my thing
  </div>

const root = document.getElementById('root')
const tree = <App />

render(tree, root)
