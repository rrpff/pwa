import React from 'react'

export default class SupermanPage extends React.Component {
  static dependencies = {
    Sidebar: 'components/Sidebar'
  }

  render () {
    const { Sidebar } = this.props.dependencies

    return (
      <section>
        <h1>Superman</h1>
        <Sidebar />
        <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/SupermanRoss.png" />
      </section>
    )
  }
}
