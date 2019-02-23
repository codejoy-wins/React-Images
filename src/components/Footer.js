import React, { Component } from 'react'

export class Footer extends Component {
  render() {
      const SuperStyle = {
          "font-size": "4rem",
      }
    return (
      <div>
        <a style={SuperStyle} href = "https://maxjann.com">Jann Software</a>
      </div>
    )
  }
}

export default Footer
