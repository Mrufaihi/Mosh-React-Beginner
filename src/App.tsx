//imports
import { useState } from 'react';
import './App.css';
import Form from './Expense-Tracker/Components/Form';
import Table from './Expense-Tracker/Components/Table';
import Filter from './Expense-Tracker/Components/Filter';
import categorySelect from './Catagory';

function App() {
  const [shoppingItems, setShoppingItems] = useState([
    { id: 1, description: 'aaa', category: 'Meats', amount: 10 },
    { id: 2, description: 'bbb', category: 'Dairy', amount: 15 },
    { id: 3, description: 'ccc', category: 'Dairy', amount: 15 },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(''); // Category init empty

  // Return to this Const filtered if Category was Selected : Else no Selection return full list
  const filteredCategory =
    selectedCategory.length > 0
      ? shoppingItems.filter((e) => e.category === selectedCategory)
      : shoppingItems;

  // when no item is found then empty table
  if (shoppingItems.length === 0) return null;

  return (
    <>
      <Form
        onSubmit={(newExpense) =>
          // change state to add new expense, spread old array to copy it
          setShoppingItems([
            ...shoppingItems,
            { ...newExpense, id: shoppingItems.length + 1 }, //calculate new id for this new expense
          ])
        }
      ></Form>
      <Filter
        onFilter={(category) => {
          setSelectedCategory(category);
        }}
      ></Filter>
      <Table
        items={filteredCategory}
        // onDelete has id args, when btn is clicked current element id is stored.
        onDelete={
          (id) =>
            setShoppingItems(shoppingItems.filter((item) => item.id !== id)) // item.id is in every object
        }
      ></Table>
    </>
  );
}

export default App;
