import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      portfolio: [],
      sortBy: "Price",
      filterBy: ""
    };
  }

  toggleSort = () => {
    this.setState(
      {
        sortBy: this.state.sortBy === "Price" ? "Alphabetically" : "Price"
      },
      () => {
        if (this.state.sortBy === "Alphabetically") {
          this.sortStocks(this.props.stocks, "price");
        } else {
          this.sortStocks(this.props.stocks, "name");
        }
      }
    );
  };

  setFilter = filterBy => {
    this.setState({ filterBy });
  };

  getStocks = () => {
    let stocksToRender = this.props.stocks;
    if (this.state.filterBy !== "") {
      stocksToRender = this.props.stocks.filter(stock => {
        return stock.type === this.state.filterBy;
      });
    }
    return stocksToRender;
  };

  sortStocks = (stocksToSort, property) => {
    return stocksToSort.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  };

  addToPortfolio = stock => {
    if (
      this.state.portfolio.findIndex(element => element.id === stock.id) === -1
    ) {
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      });
    }
  };

  removeFromPortfolio = stock => {
    this.setState({
      portfolio: this.state.portfolio.filter(item => {
        return item.id !== stock.id;
      })
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterBy={this.state.filterBy}
          sortBy={this.state.sortBy}
          toggleSort={this.toggleSort}
          setFilter={this.setFilter}
        />
        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.getStocks()}
              addStock={this.addToPortfolio}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stocks={this.state.portfolio}
              removeStock={this.removeFromPortfolio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
