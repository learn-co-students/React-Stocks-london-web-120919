import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const API = "http://localhost:3000/stocks"

class App extends Component {
  constructor(){
    super()
    this.state = {
      stocks: [],
      myPortfolio: [],
      currentStock: []
    }
  }
  
  componentDidMount(){
    fetch(API)
     .then(resp => resp.json())
     .then(stocks => this.setState({
       stocks: stocks,
       currentStock: stocks
     }))
  }

  addPortfolio = (stock) => {
    if (!this.state.myPortfolio.includes(stock)){
      this.setState({
        myPortfolio: [stock, ...this.state.myPortfolio]
        })
    }
  }

  removeFromPortfolio = (stock) =>{
      this.setState({
        myPortfolio: this.state.myPortfolio.filter(e => e !== stock)
        })
  }

  sortStocks = value =>{
    if (value === 'Alphabetically'){
      const stocks = this.state.stocks.sort((a, b) => a.name.localeCompare(b.name))
      this.setState({
        currentStock: stocks
      })
    } else if (value === 'Price'){
      const stocks = this.state.stocks.sort((a, b) => a.price.toString().localeCompare(b.price.toString(), {numeric: true}))
      this.setState({
        currentStock: stocks
      })
    }
  }

  filterStocks = (value) =>{
      this.setState({
        currentStock: this.state.currentStock.filter(stock => stock.type === value)
      })
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer filterStocks={this.filterStocks} sortStocks={this.sortStocks} removeFromPortfolio={this.removeFromPortfolio} myPortfolio={this.state.myPortfolio} addPortfolio={this.addPortfolio} stocks={this.state.currentStock}/>
      </div>
    );
  }
}

export default App;
