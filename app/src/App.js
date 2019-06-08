import React, { Component } from 'react';
import './App.scss';
import phone from './images/phone.png'

class App extends Component {

  constructor() {
    super()
    this.state = {
      productName: 'product name',
      productDesc: 'product desc,'
    }
  }

  componentDidMount() {
    fetch('/products').then(res => res.json()).then(res =>
      this.setState({
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
      </div>
    );
  }
}

export default App;
