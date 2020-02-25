import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {



  render() {
    return (
      <div>
        <SearchBar filterStocks={this.props.filterStocks} sortStocks={this.props.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer addPortfolio={this.props.addPortfolio} stocks={this.props.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer addPortfolio={this.props.removeFromPortfolio} myPortfolio={this.props.myPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
