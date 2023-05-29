import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filteredItems, setFilteredItems] = useState(items)
  function handleChange(event){
    const newFilteredItems = items.filter(item=>{
      if(event.target.value === "All") return true
      else return event.target.value === item.category
    })
    setFilteredItems(newFilteredItems)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
