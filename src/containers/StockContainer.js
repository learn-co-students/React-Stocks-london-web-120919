import React, { Component } from 'react';
import Stock from '../components/Stock';

class StockContainer extends Component {
	render() {
		return (
			<div>
				<h2>Stocks</h2>
				{this.props.stocks.map((stock, index) => (
					<Stock
						id={stock.id}
						key={stock.id}
						ticker={stock.ticker}
						price={stock.price}
						name={stock.name}
						portfolioFunction={this.props.addToPortfolio}
					/>
				))}
			</div>
		);
	}
}

export default StockContainer;
