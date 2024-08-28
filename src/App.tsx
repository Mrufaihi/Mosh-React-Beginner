//imports
import { useState } from 'react';
import './App.css';
import Form from './Expense-Tracker/Components/Form';
import Table from './Expense-Tracker/Components/Table';
<<<<<<< Updated upstream

// one place for all catagory, export to children
export const catagorySelect = ['Meats', 'Dairy', 'Breads'];

=======
import Filter from './Expense-Tracker/Components/Filter';
>>>>>>> Stashed changes
function App() {
  const [shoppingItems, setShoppingItems] = useState([
    { id: 1, description: 'aaa', catagory: 'Meats', amount: 10 },
    { id: 2, description: 'bbb', catagory: 'Dairy', amount: 15 },
    { id: 3, description: 'ccc', catagory: 'Dairy', amount: 15 },
  ]);

  const [selectedCatagory, setSelectedCatagory] = useState(''); //Catagory init empty

  // Return to this Const filtered if Catagory was Selected : Else no Selection return full list
  const filteredCatagory =
    selectedCatagory.length > 0
      ? shoppingItems.filter((e) => e.catagory === selectedCatagory)
      : shoppingItems;

  //when no item is found then empty table
  if (shoppingItems.length === 0) return null;

  return (
    <>
      <Form></Form>
<<<<<<< Updated upstream

      <Table
        items={shoppingItems}
=======
      <Filter
        onFilter={(catagory) => {
          setSelectedCatagory(catagory);
        }}
      ></Filter>
      <Table
        items={filteredCatagory}
>>>>>>> Stashed changes
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
