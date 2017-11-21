import React from 'react'
import gql from 'graphql-tag'

export default class BatmanPage extends React.Component {
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
        <h1>Batman</h1>
        <Sidebar superheroes={this.props.data.superheroes} />
        <img src="https://i.pinimg.com/originals/4d/ff/91/4dff91495c624fdac451bffb41651380.jpg" />
      </section>
    )
  }
}
