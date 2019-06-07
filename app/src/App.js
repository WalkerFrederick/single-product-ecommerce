import React, { Component } from 'react';
import './App.scss';

class App extends Component {

  constructor() {
    super()
    this.state = {
      productName: 'product name'
    }
  }

  componentDidMount() {
    fetch('/products').then(res => res.json()).then(res =>
      this.setState({
        productName: res[0].productName
      })
    )
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div className="Nav">
            
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
