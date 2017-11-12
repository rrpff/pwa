import React from 'react'

export default class BatmanPage extends React.Component {
  static dependencies = {
    Sidebar: 'components/Sidebar'
  }

  render () {
    const { Sidebar } = this.props.dependencies

    return (
      <section>
        <h1>Batman</h1>
        <Sidebar />
        <img src="https://i.pinimg.com/originals/4d/ff/91/4dff91495c624fdac451bffb41651380.jpg" />
      </section>
    )
  }
}
