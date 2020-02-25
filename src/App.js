import React, { Component } from 'react';
import Header from './components/Header';
import MainContainer from './containers/MainContainer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stocks: [],
			portfolio: [],
			currentStocks: []
		};
	}

	componentDidMount() {
		this.getAllStocks();
	}

	getAllStocks() {
		fetch('http://localhost:3000/stocks')
			.then(res => res.json())
			.then(data =>
				this.setState({
					stocks: data,
					currentStocks: data
				})
			);
	}

	addToPortfolio = id => {
		const stock = this.state.stocks.find(x => x.id === id);
		if (!this.state.portfolio.includes(stock)) {
			this.setState({
				portfolio: [...this.state.portfolio, stock]
			});
		}
	};

	removeFromPortfolio = id => {
		const stock = this.state.stocks.find(x => x.id === id);
		this.setState({
			portfolio: this.state.portfolio.filter(e => e !== stock)
		});
	};

	sortStocks = value => {
		if (value === 'Alphabetically') {
			const stocks = this.state.currentStocks.sort((a, b) =>
				a.name.localeCompare(b.name)
			);
			this.setState({
				currentStocks: stocks
			});
		} else if (value === 'Price') {
			const stocks = this.state.currentStocks.sort((a, b) =>
				a.price.toString().localeCompare(b.price.toString(), { numeric: true })
			);
			this.setState({
				currentStocks: stocks
			});
		}
	};

	filterStocks = value => {
		switch (value) {
			case 'Tech':
				this.setState({
					currentStocks: this.state.stocks.filter(e => e.type === 'Tech')
				});
				break;
			case 'Sportswear':
				this.setState({
					currentStocks: this.state.stocks.filter(e => e.type === 'Sportswear')
				});
				break;
			case 'Finance':
				this.setState({
					currentStocks: this.state.stocks.filter(e => e.type === 'Finance')
				});
				break;
			default:
				this.setState({
					currentStocks: this.state.stocks
				});
		}
	};

	render() {
		return (
			<div>
				<Header />
				<MainContainer
					stocks={this.state.currentStocks}
					addToPortfolio={this.addToPortfolio}
					portfolio={this.state.portfolio}
					removeFromPortfolio={this.removeFromPortfolio}
					filterStocks={this.filterStocks}
					sortStocks={this.sortStocks}
				/>
			</div>
		);
	}
}

export default App;
