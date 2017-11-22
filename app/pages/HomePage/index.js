import React from 'react'
import gql from 'graphql-tag'

export default class HomePage extends React.Component {
  static dependencies = {
    Sidebar: 'components/Sidebar'
  }

  static query (gqlClient) {
    return gqlClient.query({
      query: gql`
        {
          posts {
            title,
            slug
          }
        }
      `
    })
  }

  render () {
    const { Sidebar } = this.props.dependencies
    const { posts } = this.props.data

    return (
      <section>
        <h1>Blog</h1>
        <Sidebar posts={posts} />
      </section>
    )
  }
}
