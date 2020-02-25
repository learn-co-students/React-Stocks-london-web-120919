import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  renderStock = (stocks) => {
    return stocks.map(stock => (
      <div handleClick={this.props.removeStock}  key={stock.id}>
        <Stock name={stock.name} ticker={stock.ticker} price={stock.price}/>
      </div>))
  }


  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderStock(this.props.stocks)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
