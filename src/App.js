import React from 'react';
import AddItemForm from './app-data/AddItemForm';
import ShoppingList from './app-data/ShoppingList';
//contains everything

class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
    
  };
  handleAddItem = (itemName) => {
    console.log('handle add item', { itemName })
    const newItems = [
      ...this.state.shoppingItems,
      { name: itemName, checked: false }
    ]
    this.setState({
      shoppingItems: newItems
    })
  }
  
  handleDeleteItem(){
    console.log('handle delete item called')
  }
  handleCheckItem(){
    console.log('handle check item called')
  }
  handleAddItem = (itemName) => {
    console.log('handle add item', { itemName })
  }
  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm 
              onAddItem={this.handleAddItem}
            />
          </section>
          <section>
            <ShoppingList 
              items={this.state.shoppingItems}
              /* add the two callback props here */
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    )
  }
};

export default App