import React from 'react'
import Link from '../../link'

export default ({ superheroes }) =>
  <ul>
    <li key="home" style={{ color: 'red' }}>
      <Link href="/">
        <strong>
          Home
        </strong>
      </Link>
    </li>
    {superheroes.map(superhero =>
      <li style={{ color: 'red' }} key={superhero.name}>
        <Link href={`/${superhero.slug}`}>
          <strong>
            {superhero.name}
          </strong>
        </Link>
      </li>
    )}
  </ul>
