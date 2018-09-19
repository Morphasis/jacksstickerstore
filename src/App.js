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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Jacks Sticker Store</h2>
        </div>
        <div className="store-item">
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
