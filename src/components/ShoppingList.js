import React, { useState } from 'react'
import ItemForm from './ItemForm'
import Filter from './Filter'
import Item from './Item'

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filterList, setFilterList] = useState('')

  function onSearchChange(e) {
    setFilterList(e.target.value)
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === 'All') {
      if (item.name.toLowerCase().includes(filterList.toLowerCase())) {
        return true
      } else {
        return false
      }
    } else {
      return (
        item.category === selectedCategory && item.name.includes(filterList)
      )
    }
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={onSearchChange}
        filterList={filterList}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
            filterList={filterList}
          />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
