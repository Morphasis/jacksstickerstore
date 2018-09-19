import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React, { Component } from 'react';
import logo from './logo.svg';
import Checkout from './Checkout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="parallax">
          <h1>Jacks sticker store</h1>
        </div>
        <div className="store-item">
          <div className="mooncake"></div>
          <Checkout
            name={'It is cold comrade'}
            description={'A custom 3x3 inch sticker'}
            amount={3}
          />
        </div>
        <div className="store-item">
          <div className="mooncake"></div>
          <Checkout
            name={'It is cold comrade'}
            description={'A custom 3x3 inch sticker'}
            amount={3}
          />
        </div>
        <div className="store-item">
          <div className="mooncake"></div>
          <Checkout
            name={'It is cold comrade'}
            description={'A custom 3x3 inch sticker'}
            amount={3}
          />
        </div>
        <div className="store-item">
          <div className="mooncake"></div>
          <Checkout
            name={'It is cold comrade'}
            description={'A custom 3x3 inch sticker'}
            amount={3}
          />
        </div>
        <div className="store-item">
          <div className="mooncake"></div>
          <Checkout
            name={'It is cold comrade'}
            description={'A custom 3x3 inch sticker'}
            amount={3}
          />
        </div>
        <div className="store-item">
          <div className="mooncake"></div>
          <Checkout
            name={'It is cold comrade'}
            description={'A custom 3x3 inch sticker'}
            amount={3}
          />
        </div>
      </div>
    );
  }
}

export default App;
