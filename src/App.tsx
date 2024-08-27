//imports
import { useState } from 'react';
import './App.css';
import Form from './Expense-Tracker/Components/Form';
import Table from './Expense-Tracker/Components/Table';

// one place for all catagory, export to children
export const catagorySelect = ['Meats', 'Dairy', 'Breads'];

function App() {
  const [shoppingItems, setShoppingItems] = useState([
    { id: 1, description: 'aaa', catagory: 'Meats', amount: 10 },
    { id: 2, description: 'bbb', catagory: 'Dairy', amount: 15 },
    { id: 3, description: 'ccc', catagory: 'Dairy', amount: 15 },
  ]);

  function onHandleDelete() {}

  //when no item is found then empty table
  if (shoppingItems.length === 0) return null;

  return (
    <>
      <Form></Form>

      <Table
        items={shoppingItems}
        // onDelete has id args, when btn is clicked current element id is stored.
        onDelete={
          (id) =>
            setShoppingItems(shoppingItems.filter((item) => item.id !== id)) //item.id is in every object
        }
      ></Table>
    </>
  );
}

export default App;
