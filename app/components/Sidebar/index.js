import React from 'react'
import Link from '../../link'

export default ({ posts }) =>
  <ul>
    <li key="home"><Link href="/">Home</Link></li>
    {posts.map(post =>
      <li key={post.slug}>
        <Link href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </li>
    )}
  </ul>
