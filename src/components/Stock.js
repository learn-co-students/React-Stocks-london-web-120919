import React from 'react'
// import SearchBar from './SearchBar';

const Stock = ({id, ticker, name, type, addPortfolio, price, stock}) => (
    
  <div onClick={() => addPortfolio(stock)}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
            {name}
          </h5>
        <p>type: {type}</p>
        <p className="card-text">
            {ticker}: {price}
          </p>
      </div>
    </div>


  </div>
);

export default Stock
