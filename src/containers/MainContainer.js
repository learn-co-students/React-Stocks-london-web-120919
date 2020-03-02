import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const URL = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    allStocks: [],
    portfolioStocks: [],
    sorted: null,
    filtered: null
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(json => this.setState({
        allStocks: json
    }))
  }

  buyStock = (stock) => {
    if (!this.state.portfolioStocks.includes(stock)) {
      this.setState({
        portfolioStocks: [...this.state.portfolioStocks, stock]
      })
    }
  }

  sellStock = (stock) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(myStock => myStock !== stock)
    })
  }

  filteredStock = () => {
    const { filtered } = this.state;
    const allStocks = this.sortedStock()

    if (!filtered) return allStocks;

    switch (filtered) {
      case 'Tech':
        return allStocks.filter(stock => stock.type === 'Tech')
      
      case 'Finance':
        return allStocks.filter(stock => stock.type === 'Finance')
      
      case 'Sportswear':
        return allStocks.filter(stock => stock.type === 'Sportswear')
      
      default: 
        return allStocks
    }
  }
  

  sortedStock = () => {
    const { sorted, allStocks } = this.state
    
    if (!sorted) return allStocks;

    if (sorted === "alpha") {
      return allStocks.sort((a, b) => a.name.localeCompare(b.name))
    }

    if (sorted === "price") {
      return allStocks.sort((a,b) => a.price - b.price)
    }
  }

  setFilter = filtered => {
    this.setState({ filtered })
  }

  setSorted = sorted => {
    this.setState({ sorted })
  }

  render() {

    return (
      <div>
         <SearchBar
          setFilter={this.setFilter}
          setSort={this.setSorted}
          sorted={this.state.sorted}
         />

          <div className="row">
            <div className="col-8">

            <StockContainer allStocks={this.filteredStock()} handleClick={this.buyStock}/>

            </div>
            <div className="col-4">

            <PortfolioContainer portfolioStocks={this.state.portfolioStocks} handleClick={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
