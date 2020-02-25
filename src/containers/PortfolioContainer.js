import React, { Component } from 'react';
import Stock from '../components/Stock';

class PortfolioContainer extends Component {
	render() {
		return (
			<div>
				<h2>My Portfolio</h2>
				{this.props.portfolio.map((stock, index) => (
					<Stock
						id={stock.id}
						key={stock.id}
						ticker={stock.ticker}
						price={stock.price}
						name={stock.name}
						portfolioFunction={this.props.removeFromPortfolio}
					/>
				))}
			</div>
		);
	}
}

export default PortfolioContainer;
