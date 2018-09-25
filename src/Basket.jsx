import React from 'react'
import _ from 'lodash'

const removeFromBasket = function(item_id) {
  let basket_array = JSON.parse(localStorage.getItem('basket'));
  basket_array = _.remove(basket_array, function(n) {
    return n.item_id !== item_id;
  });
  console.log(basket_array);
  localStorage.setItem("basket", JSON.stringify(basket_array));
}

const listBasket = function(){
  console.log(JSON.parse(localStorage.getItem('basket')));
}

export const RemoveFromBasket = ({productID}) => (
  <a href="#" onClick={() => removeFromBasket(productID)}>Remove from basket</a>
);

export const ListBasket = () => (
  <a href="#" onClick={listBasket}>List basket</a>
);

export const AddToBasket = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addToBasket(item_id, item_qnt, item_name) {
    console.log(item_id);
    if (localStorage.getItem('basket') === null) {
      let basket_array = [];
      let item = {"item_id": item_id, "item_name": item_name, "item_qnt": item_qnt};
      basket_array.push(item)
      localStorage.setItem("basket", JSON.stringify(basket_array));
    } else {
      let basket_array = JSON.parse(localStorage.getItem('basket'));
      let item = {"item_id": item_id, "item_name": item_name, "item_qnt": item_qnt};
      basket_array.push(item)
      localStorage.setItem("basket", JSON.stringify(basket_array));
    }
  }

  handleChange(event) {
    console.log(event.target);
    console.log(event.target.value);
    this.setState({quantity: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.quantity);
    this.addToBasket(this.props.productID, this.state.quantity, this.props.productName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.props.productName}</h2>
        <label>
          Quantity:
        </label>
        <input type="number" value={this.state.quantity} onChange={this.handleChange} />
        <button type="submit" value="Submit">Add Item To Basket</button>
      </form>
    );
  }
}
