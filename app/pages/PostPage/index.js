import React from 'react'
import gql from 'graphql-tag'

export default class PostPage extends React.Component {
  static dependencies = {}

  static query (client, params) {
    const { slug } = params

    return client.query({
      query: gql`
        {
          post: post(slug: "${slug}") {
            title,
            html
          }
        }
      `
    })
  }

  render () {
    const { post } = this.props.data

    return (
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    )
  }
}
