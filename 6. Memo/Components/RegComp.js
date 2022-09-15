import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    console.log('Regular Component Render');
    return (
      <div>RegComp {this.props.name}</div>
    )
  }
}

export default RegComp