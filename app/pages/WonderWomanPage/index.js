import React from 'react'
import gql from 'graphql-tag'

export default class WonderWomanPage extends React.Component {
  static dependencies = {
    Sidebar: 'components/Sidebar'
  }

  static query (client) {
    return client.query({
      query: gql`
        {
          superheroes {
            name,
            slug
          }
        }
      `
    })
  }

  render () {
    const { Sidebar } = this.props.dependencies

    return (
      <section>
        <h1>Wonder Woman</h1>
        <Sidebar superheroes={this.props.data.superheroes} />
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Wonder_Woman.jpg/250px-Wonder_Woman.jpg" />
      </section>
    )
  }
}
