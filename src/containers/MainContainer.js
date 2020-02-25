import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    sorted: null,
    filtered: null
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(stocks => this.setState({
        stocks
      }))

  }

  addToPortfolio = (stock) => {
    const { portfolio } = this.state
    if (!portfolio.includes(stock)) {
      this.setState({
        portfolio: [...portfolio, stock]
      })
    }
  }

  removeFromPortfolio = (stockID) => {
    const { portfolio } = this.state
    this.setState({
      portfolio: portfolio.filter( stock => stock !== stockID )
    })
  }

  portfolioStocks = () => {
    const { stocks, portfolio } = this.state
    return stocks.filter(stock => portfolio.includes(stock.id))
  }

  setSort = (sorted) => {
    this.setState({
      sorted
    })
  }

  setFilter = (filtered) => {
    this.setState({
      filtered
    })
  }

  filteredStocks = () => {
    const stocks = this.sortedStocks()

    switch (this.state.filtered) {
      case "Tech":
        return stocks.filter(stock => stock.type === "Tech")
      case "Finance":
        return stocks.filter(stock => stock.type === "Finance")
      case "Sportswear":
        return stocks.filter(stock => stock.type === "Sportswear")
      default:
        return stocks
    }

  }

  sortedStocks = () => {
    const { sorted, stocks } = this.state
    if (!sorted) {
      return stocks
    } else if (sorted === "alpha") {
      return stocks.sort((a,b) => a.name.localeCompare(b.name))
    } else if (sorted === "price") {
      return stocks.sort((a,b) => a.price - b.price )
    }
  }

  render() {
    const { sorted } = this.state

    return (

      <div>
        <SearchBar
          setSort={this.setSort}
          setFilter={this.setFilter}
          sorted={sorted}
        />

          <div className="row">
            <div className="col-8">

            <StockContainer
              stocks={this.filteredStocks()}
              addToPortfolio={this.addToPortfolio}
            />

            </div>
            <div className="col-4">

            <PortfolioContainer
              stocks={this.portfolioStocks()}
              removeFromPortfolio={this.removeFromPortfolio}
            />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
