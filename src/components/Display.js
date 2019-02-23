import React, { Component } from 'react'

export class Display extends Component {
  render() {
      console.log(`feature : ${this.props.featuredImage}`)
      const myStyle = {
          "height": "40rem",
      }
    return (
      <div>
        <img style={myStyle} src={this.props.featuredImage}></img>
      </div>
    )
  }
}

export default Display
