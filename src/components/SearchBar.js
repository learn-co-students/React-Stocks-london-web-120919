import React from 'react';

const SearchBar = ({ sortBy, toggleSort, setFilter }) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={sortBy === "Alphabetically"} onChange={toggleSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={sortBy === "Price"} onChange={toggleSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select  onChange={e => setFilter(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
