import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCatagory, selectedCatagoryState] = useState('All')

  function handleCategoryChange(event) {
    selectedCatagoryState(event.target.value)
  }

  const displayCatagory = items.filter((item) => {
    if (selectedCatagory === 'All') {
      return true
    } else {
      return item.category === selectedCatagory
    }
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayCatagory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
