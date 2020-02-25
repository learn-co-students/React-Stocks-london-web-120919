import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  renderStock = (stocks) => {
    return stocks.map(stock => (
      <div onClick={()=> {this.props.addStock(stock)}} key={stock.id}>
        <Stock  name={stock.name} ticker={stock.ticker} price={stock.price}/>
      </div>))
  }


  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStock(this.props.stocks)
        }
      </div>
    );
  }

}

export default StockContainer;
