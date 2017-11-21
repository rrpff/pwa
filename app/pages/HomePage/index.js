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
        <h1>Justice League</h1>
        <img src="https://actionfigurecanada.files.wordpress.com/2009/08/alexrossjusticeleague.jpg" />

        <h2>Justice League Members</h2>
        <Sidebar superheroes={this.props.data.superheroes} />
      </section>
    )
  }
}
