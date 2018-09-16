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
        <img src={'http://placehold.it/400x400&text=slide1'}></img>
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
