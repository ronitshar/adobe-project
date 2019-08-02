import React from 'react';
import logo from './logo.svg';
import Product from './components/Product';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  newProduct() {
    return {
      creditCardOffering: "None",
      entitlementPeriod: "None",
      entitlementType: "None",
      marketSegment: "None",
      paymentStatus: "None",
      productName: "None",
      promoCode: "None",
      routeToMarket: "None",
      subscriptionStatus: "None"
    }
  }
  addProduct() {
    this.setState({ products: [...this.state.products, this.newProduct()] });
  }
  removeProduct() {
    let currState = this.state.products;
    currState.pop();
    this.setState({ products: currState })
  }
  render() {
    return (
      <div className="App">
        {this.state.products.map(v => {
          return <Product properties={v}/>
        })}
        <button className="button" onClick={() => this.addProduct()}>Add</button>
        <button className="button" onClick={() => this.removeProduct()}>Remove</button>
      </div>
    );
  }
}

export default App;
