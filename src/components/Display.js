import React, { Component } from 'react'

export class Display extends Component {
  render() {
      console.log(`feature : ${this.props.featuredImage}`)
      const myStyle = {
          "width": "100%",
      }
      const moreStyle = {
        "padding": ".5rem",
        "textAlign": "center",
      }
    return (
      <div style={moreStyle}>
        <img style={myStyle} src={this.props.featuredImage}></img>
      </div>
    )
  }
}

export default Display
