import React, { Component } from 'react'

export class Carousel extends Component {
  render() {
      console.log(`list from props is ${this.props.gallery}`);
      console.log(`list from props is ${this.props.gallery[0]}`);

      const override2 = {
          "height": "11rem",
      }

      const { gallery, disp } = this.props;
      // map a list of urls to create elements.

      const xp = gallery.map((thing, spot)=><img key={spot} onClick={()=>disp(thing)} style={override2} src={thing}></img>);
      const override3 ={
          "height":"11rem",
          "width":"80%",
          "overflow": "auto",
          "textAlign": "center",
      }
    return (
      <div style={override3}>
        {xp}
      </div>
    )
  }
}

export default Carousel
