import React, { Component } from 'react';
import './App.scss';
import phone from './images/phone.png'

import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class App extends Component {

  constructor() {
    super()
    this.state = {
      product: {},
      productName: 'product name',
      productDesc: 'product desc,'
    }
  }

  componentDidMount() {
    fetch('/products').then(res => res.json()).then(res =>
      this.setState({
        product: res[0],
        productName: res[0].productName,
        productDesc: res[0].productDesc
      })
    )
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div className="Nav">
            <h1>urphone</h1>
            <button>Buy</button>
          </div>
        </nav>
        <section className="main-container">
          <div className="main-left">
            <img src={phone}></img>
          </div>
          <div className="main-right">
            <h1>The only phone you'll ever need.</h1>
            <h2>{this.state.productName + ' - ' + this.state.productDesc}</h2>
            <button>View Options</button>
          </div>
        </section>
        <StripeProvider apiKey="pk_test_lONZ8adrBqGGKcuUbPtqgyrn00dEmUEcZ3">
          <div className="checkout-form">
            <h1>Buy Now</h1>
            <Elements>
              <CheckoutForm item={this.state.product}/>
            </Elements>
          </div>
        </StripeProvider>
      </div>
    );
  }
}

export default App;
