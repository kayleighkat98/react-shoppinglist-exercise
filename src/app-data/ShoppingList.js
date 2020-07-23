import React from 'react';
import ShoppingItem from './ShoppingItem';
// A list containing all of the items.

export default 
function ShoppingList(props) {
  return (
    <ul>
      {props.items.map((item, i) =>
        <ShoppingItem
          key={i}
          item={item}
          onDeleteItem={props.onDeleteItem}
          onCheckItem={props.onCheckItem}
        />
      )}
    </ul>
  )
}

ShoppingList.defaultProps = {
  items: []
}