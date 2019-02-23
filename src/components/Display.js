import React, { Component } from 'react'

export class Display extends Component {
  render() {
      console.log(`feature : ${this.props.featuredImage}`)
      const myStyle = {
          "height": "40rem",
      }
      const moreStyle = {
        "padding": "5rem"
      }
    return (
      <div style={moreStyle}>
        <img style={myStyle} src={this.props.featuredImage}></img>
      </div>
    )
  }
}

export default Display
