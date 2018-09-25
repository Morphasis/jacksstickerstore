import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React, { Component } from 'react';
import logo from './logo.svg';
import Checkout from './Checkout';
import {AddToBasket, RemoveFromBasket, ListBasket, MyForm} from './Basket'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RemoveFromBasket productID="test_id_here_12345"></RemoveFromBasket> <br />
        <ListBasket></ListBasket>
        <AddToBasket productName="StickerExample1" productID="test_id_here_12345"></AddToBasket>
      </div>
    );
  }
}

export default App;
