import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';

const CURRENCY = 'GBP';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
  console.log(data);
};

const errorPayment = data => {
  alert('Payment Error');
  console.log(data);
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

export const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export const CheckoutForm = class extends React.Component {
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
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your details with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="fullname">Full Name</label>
          <input type="text" className="form-control" id="fullname" placeholder="Enter full name" />
        </div>
        <div className="form-group">
          <label for="address_1">Address line 1</label>
          <input type="text" className="form-control" id="address_1" placeholder="Enter address line 1" />
        </div>
        <div className="form-group">
          <label for="address_2">Address line 2</label>
          <input type="text" className="form-control" id="address_2" placeholder="Enter address line 2" />
        </div>
        <div className="form-group">
          <label for="city">City</label>
          <input type="text" className="form-control" id="city" placeholder="Enter city" />
        </div>
        <div className="form-group">
          <label for="state">State</label>
          <input type="text" className="form-control" id="state" placeholder="Enter state" />
        </div>
        <div className="form-group">
          <label for="postcode">Post code</label>
          <input type="text" className="form-control" id="postcode" placeholder="Enter post code" />
        </div>
        <div className="form-group">
          <label for="country">Country</label>
          <input type="text" className="form-control" id="country" placeholder="Enter country" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
  }
}
