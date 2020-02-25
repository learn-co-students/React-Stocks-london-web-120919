import React from 'react';

const Stock = props => (
	<div onClick={() => props.portfolioFunction(props.id)}>
		<div className='card'>
			<div className='card-body'>
				<h5 className='card-title'>{props.name}</h5>
				<p className='card-text'>{//ticker: stock price
				`${props.ticker}: ${props.price}`}</p>
			</div>
		</div>
	</div>
);

export default Stock;
