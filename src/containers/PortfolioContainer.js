import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderAllStocks(){
    return this.props.myPortfolio.map(stock => <Stock stock={stock} addPortfolio={this.props.addPortfolio} key={stock.id} id={stock.id} ticker={stock.ticker} name={stock.name} type={stock.type} price={stock.price} />)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderAllStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
