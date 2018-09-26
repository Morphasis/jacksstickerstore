import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash'
import $ from 'jquery';
import Popper from 'popper.js';
import React, { Component } from 'react';
import logo from './logo.svg';
import Checkout from './Checkout';
import {AddToBasket, RemoveFromBasket, Basket} from './Basket'
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingBasket)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basket_items: [],
      basket_amount: 0
    };
  }

  updateBasketItems(item_id, item_qnt, item_name) {
    let item = {"item_id": item_id, "item_name": item_name, "item_qnt": parseInt(item_qnt)};
    let basket_array = this.state.basket_items
    basket_array.push(item)

    function findItemOfQnt(n) {
      if (n.item_id === item_id) {
        return n.item_qnt;
      }
    }

    let basket_amount = _.sumBy(basket_array, function(o) { return o.item_qnt; });

    this.setState({
      basket_items: basket_array,
      basket_amount: basket_amount
    })
  }

  removeBasketItems(item_id) {
    let basket_array = this.state.basket_items;
    basket_array = _.remove(basket_array, function(n) {
      return n.item_id !== item_id;
    });
    let basket_amount = _.sumBy(basket_array, function(o) { return o.item_qnt; });
    this.setState({
      basket_items: basket_array,
      basket_amount: basket_amount
    })
  }

  render() {
    return (
      <div className="App container">
        <Basket basketLength={this.state.basket_amount}></Basket>
        <AddToBasket
          productName="StickerExample1"
          productID="test_id_here_12345"
          updateBasket={this.updateBasketItems.bind(this)} ></AddToBasket>
          <RemoveFromBasket productID="test_id_here_12345" removeBasket={this.removeBasketItems.bind(this)}></RemoveFromBasket> <br />
      </div>
    );
  }
}

export default App;
