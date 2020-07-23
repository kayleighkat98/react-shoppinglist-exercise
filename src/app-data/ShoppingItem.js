// import React from 'react';
// import AddItem from './add-item-form';
//An individual item within the list that contains a check button and a delete button. There will be 0 or more of these.
import React from 'react'

export default 
function ShoppingItem(props) {
  return (
    <li>
      <h2 style={{
        textDecoration: props.item.checked ? 'line-through' : null,
      }}>
        {props.item.name}
      </h2>
      <button
        onClick={() => props.onCheckItem(props.item)}
        type='button'>
        check
      </button>
      <button
        onClick={() => props.onDeleteItem(props.item)}
        type='button'>
        delete
      </button>
    </li>
  )
}

ShoppingItem.defaultProps = {
  item: {}
}