import React from 'react'
import Link from '../../link'

export default ({ superheroes }) =>
  <ul>
    <li key="home"><Link href="/">Home</Link></li>
    {superheroes.map(superhero =>
      <li key={superhero.name}>
        <Link href={`/${superhero.slug}`}>
          {superhero.name}
        </Link>
      </li>
    )}
  </ul>
