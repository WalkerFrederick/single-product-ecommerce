import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      complete: false,
    }
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let data = {
      token: token.id,
      product: this.props.item,
    }
    let response = await fetch("/checkout", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: JSON.stringify(data)
    });
  
    if (response.ok) this.setState({complete: true})
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);