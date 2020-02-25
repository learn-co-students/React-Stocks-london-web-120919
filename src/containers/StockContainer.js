import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStock = () => {
    return this.props.allStocks.map(stock => <Stock stock={stock} key={stock.id} handleClick={this.props.handleClick}/>)
  }


  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStock()
        }
      </div>
    );
  }

}

export default StockContainer;
