import React from 'react'

export default class HomePage extends React.Component {
  static dependencies = {
    Sidebar: 'components/Sidebar'
  }

  render () {
    const { Sidebar } = this.props.dependencies

    return (
      <section>
        <h1>Justice League</h1>
        <Sidebar />
        <img src="https://actionfigurecanada.files.wordpress.com/2009/08/alexrossjusticeleague.jpg" />
      </section>
    )
  }
}
