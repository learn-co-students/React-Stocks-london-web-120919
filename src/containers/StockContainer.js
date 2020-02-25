import React, { Component } from 'react';
import Stock from '../components/Stock'


class StockContainer extends Component {


  renderAllStocks(){
    return this.props.stocks.map(stock => <Stock stock={stock} addPortfolio={this.props.addPortfolio} key={stock.id} id={stock.id} ticker={stock.ticker} name={stock.name} type={stock.type} price={stock.price} />)
  }
  render() {
    // console.log(this.props.stocks)
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderAllStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
