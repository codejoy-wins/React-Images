import React, { Component } from 'react'

export class Image extends Component {
  render() {
    const gallery = {
        "height": "10rem",
        "padding": "1rem",
        "margin": "1rem",
    }
    const override = {
        "display": "inline-block",
    }

    return (
      <div style={override}>
        <img style={gallery} src = {this.props.imagine}></img>
      </div>
    )
  }
}

export default Image
