import React, { Component } from 'react';
import hunter from './images/hunter.png';
import got from './images/both.jpg';
import kobe from './images/kobe.jpg';
import mj from './images/mj.jpg';
import Carousel from './components/Carousel';
import Display from './components/Display';
import lebron from './images/lebron.jpg';
import Footer from './components/Footer';
import Instructions from './components/Instructions';

import './App.css';

class App extends Component {

  state = {
    images: [hunter, got, kobe, mj, lebron],
    mainImage: '',
  }

  displayImage = imagination=>{
    console.log(`trying to display ${imagination}`);
    // set state instead of mod doc
    this.setState({
      mainImage: imagination,
    })
  }

  

  render() {
    const displaySty = {
      "height": "4rem",
    }

    if(this.state.mainImage){
      console.log("main image available");
      
      return (
        <div style={displaySty} className="App">
          <div id="display"></div>
          < Carousel gallery = {this.state.images} disp = {this.displayImage}/>
          <Display featuredImage = {this.state.mainImage}/>
        < Footer />

        </div>
      );

    }else{
      console.log("main image unavailable.")
    }
    return (
      <div style={displaySty} className="App">
        <div id="display"></div>
        < Instructions />

        < Carousel gallery = {this.state.images} disp = {this.displayImage}/>

        < Footer />

      </div>
    );
  }
}

export default App;
