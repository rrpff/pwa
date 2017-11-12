import React from 'react'

export default class WonderWomanPage extends React.Component {
  static dependencies = {
    Sidebar: 'components/Sidebar'
  }

  render () {
    const { Sidebar } = this.props.dependencies

    return (
      <section>
        <h1>Wonder Woman</h1>
        <Sidebar />
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Wonder_Woman.jpg/250px-Wonder_Woman.jpg" />
      </section>
    )
  }
}
