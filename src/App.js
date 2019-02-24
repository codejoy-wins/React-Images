import React, { Component } from 'react';
import hunter from './images/hunter.png';
import got from './images/both.jpg';
import kobe from './images/kobe.jpg';
import dragon from './images/dragon.jpg';
import mj from './images/mj.jpg';
import elon from './images/elon.jpeg';
import Carousel from './components/Carousel';
import Display from './components/Display';
import lebron from './images/lebron.jpg';
import Footer from './components/Footer';
import life from './images/lif3.jpg';
import apoc from './images/apoc.jpg';

import Xp from './components/Xp';
import './App.css';

class App extends Component {

  state = {
    images: [elon, hunter, got, kobe, mj, lebron, hunter, got, life, apoc, hunter, got, dragon, elon, lebron, hunter, got, kobe, mj, lebron,  hunter, got, kobe, mj, lebron, dragon ],
    mainImage: elon,
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
      // "height": "14rem",
      "padding": "0px",
    }

    const centaur = {
      "textAlign": "center",
      "padding": "4px",
      "background": "black",
    }
    return (
      <div style={displaySty} className="App">
        < Carousel gallery = {this.state.images} disp = {this.displayImage}/>
        <div id="xp3" style={centaur}>
          <Display featuredImage = {this.state.mainImage}/>
          < Xp />
        </div>
        < Xp />
        {/* < Carousel gallery = {this.state.images} disp = {this.displayImage}/> */}
      < Footer />
      </div>
    );
  }
}

export default App;
