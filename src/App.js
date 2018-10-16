import _ from 'lodash'
import React, { Component } from 'react';
// import {Checkout, CheckoutForm} from './Checkout';
// import {AddToBasket, RemoveFromBasket, Basket, Test} from './Basket'
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import Corgi from './images/corgi2.png'
import Strawberry from './images/strawberry.jpg'
import Comraid from './images/comraid.jpg'
import Banana from './images/banana.jpg'

import AppBar from './components/AppBar'
import Drawer from './components/Drawer'
import ShopCardItem from './components/ShopCardItem'
import BottomNav from './components/BottomNav'

import Grid from '@material-ui/core/Grid';

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
          <div className="content" style={{flexGrow: 1,}}>
            // <Drawer></Drawer>
            <Grid container
              direction="row"
              justify="space-between"
              alignItems="center">
              <Grid container justify="center" item sm={12} md={4} alignItems="center">
                <ShopCardItem
                displayImage={Corgi}
                productDescription="This fun little corgi sticker is called barry."
                productName="Corgi The Sticker!"
                productPrice="3.00"
                productID="test_id_here_12345"
                updateBasket={this.updateBasketItems.bind(this)}/>
              </Grid>
              <Grid container justify="center" item sm={12} md={4}>
                <ShopCardItem
                displayImage={Strawberry}
                productName="The Final Straw Berry"
                productDescription="This little strawberry sticker is great. My friends daughter called it Shelly, so its Shelly the strawberry you can't argue with a three year old."
                productPrice="2.00 (Buy 1 Get 1 Free)"
                productID="test_id_here_12345"
                updateBasket={this.updateBasketItems.bind(this)}/>
              </Grid>
              <Grid container justify="center" item sm={12} md={4}>
                <ShopCardItem
                displayImage={Comraid}
                productName="The Final Straw Berry"
                productDescription="A soviet inspired sticker i tried to do something a little different here."
                productPrice="3.00"
                productID="test_id_here_12345"
                updateBasket={this.updateBasketItems.bind(this)}/>
              </Grid>
              <Grid item container justify="center" sm={12} md={4}>
                <ShopCardItem
                displayImage={Banana}
                productName="I'm bananas over you ;)"
                productDescription="Very cringy, but i have a few more fruit puns coming."
                productPrice="3.00"
                productID="test_id_here_12345"
                updateBasket={this.updateBasketItems.bind(this)}/>
              </Grid>
            </Grid>
            <BottomNav/>
          </div>
      </div>
    );
  }
}

export default App;
