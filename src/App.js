import _ from 'lodash'
import React, { Component } from 'react';
// import {Checkout, CheckoutForm} from './Checkout';
// import {AddToBasket, RemoveFromBasket, Basket, Test} from './Basket'
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import Corgi from './images/corgi2.png'
import AppBar from './components/AppBar'
import ShopCardItem from './components/ShopCardItem'
import BottomNav from './components/BottomNav'

library.add(faShoppingBasket);

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

    // function findItemOfQnt(n) {
    //   if (n.item_id === item_id) {
    //     return n.item_qnt;
    //   }
    // }

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
      <div>
        <AppBar basketLength={this.state.basket_amount}/>
        <div className="content">
          <ShopCardItem
          displayImage={Corgi}
          productDescription="This fun little corgi sticker is called barry."
          productName="Barry The Corgi"
          productID="test_id_here_12345"
          updateBasket={this.updateBasketItems.bind(this)}/>
        <ShopCardItem
          displayImage={Corgi}
          productName="Barry The Other Corgi"
          productID="test_id_here_12345"
          updateBasket={this.updateBasketItems.bind(this)}/>
        </div>
        <BottomNav/>
      </div>
    );
  }
}

export default App;
