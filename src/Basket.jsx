import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css';
import axios from 'axios';
import PAYMENT_SERVER_URL from './constants/server';

export const RemoveFromBasket = class extends React.Component {
  onRemoveFromBasket() {
    this.props.removeBasket(this.props.productID)
  }
  render() {
    return (
      <a href="#" onClick={this.onRemoveFromBasket.bind(this)}>Remove from basket</a>
    )
  }
};

export const AddToBasket = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({quantity: event.target.value});
  }

  handleSubmit(event) {
    this.props.updateBasket(this.props.productID, this.state.quantity, this.props.productName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.props.productName}</h2>
        <div className="form-group">
          <label>
            Quantity:
          </label>
          <input type="number" value={this.state.quantity} onChange={this.handleChange} className="form-control"/>
        </div>
        <button type="submit" value="Submit" className="btn btn-primary">Add Item To Basket</button>
      </form>
    );
  }
}

export const Basket = class extends React.Component {



  render() {
    return (
      <div className="basket-wrapper">
        <FontAwesomeIcon className="basket-icon" icon="shopping-basket" />
        <div className="notification-icon">{this.props.basketLength}</div>
      </div>
    );
  }
}

export const Test = class extends React.Component {

  onRemoveFromBasket() {
    axios.post(PAYMENT_SERVER_URL + '/submitOrder')
    .then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.onRemoveFromBasket.bind(this)}>Create new order</a>
      </div>
    );
  }
}
