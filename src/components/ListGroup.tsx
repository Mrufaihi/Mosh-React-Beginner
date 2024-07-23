//Imports
import { useState } from 'react';

//COMPONENT
function ListGroup() {
  //Variables
  let items = ['Tokyo', 'Saudi arabia', 'USA', 'Amesterdam'];
  // Hook: access built in features in React
  // State Hook: tell React this Component State might Change
  const [selectedIndex, setSelectedIndex] = useState(-1); //useState(init) = returns array[init V, updated V]

  //Event Handler

  // Mapping
  const mappedLists = items.map((item, index) => (
    <li
      className={
        selectedIndex === index ? 'list-group-item active' : 'list-group-item'
      }
      key={item}
      onClick={() => {
        setSelectedIndex(index); //set selected -> index of current item
      }}
    >
      {item}
    </li>
  ));
  // Conditional Rendering
  const ifEmpty = items.length === 0 && <p>Empty</p>; //.length (true) && <p>:Empty (truthy) | return 2nd

  // return statement
  return (
    <>
      <h1>List Group</h1>
      {ifEmpty}
      <ul className="list-group">{mappedLists}</ul>
    </>
  );
}

// Export Component
export default ListGroup;
