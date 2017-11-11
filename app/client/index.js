import React from 'react'
import { hydrate } from 'react-dom'
import App from '../components/App'

const root = document.getElementById('root')
const tree = <App />

hydrate(tree, root)
