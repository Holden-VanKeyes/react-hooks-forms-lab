import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

function ItemForm(props) {
  const [newItem, setNewItem] = useState({ name: '', category: 'Produce' })

  function handleItemSelect(e) {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const addItemToList = {
      id: uuid(),
      name: newItem.name,
      category: newItem.category,
    }
    props.onItemFormSubmit(addItemToList)
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleItemSelect}
          value={newItem.name}
        />
      </label>

      <label>
        Category:
        <select onChange={handleItemSelect} name="category">
          <option value="Dessert">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  )
}

export default ItemForm
