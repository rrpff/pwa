import React from 'react'
import Link from '../../link'

export default () =>
  <ul>
    <li style={{ color: 'red' }}><Link href="/">Home</Link></li>
    <li style={{ color: 'red' }}><Link href="/batman">Batman</Link></li>
    <li style={{ color: 'red' }}><Link href="/superman">Superman</Link></li>
    <li style={{ color: 'red' }}><Link href="/wonderwoman">Wonder Woman</Link></li>
  </ul>
