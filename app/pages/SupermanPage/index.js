import React from 'react'
import gql from 'graphql-tag'

export default class SupermanPage extends React.Component {
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
        <h1>Superman</h1>
        <Sidebar superheroes={this.props.data.superheroes} />
        <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/SupermanRoss.png" />
      </section>
    )
  }
}
