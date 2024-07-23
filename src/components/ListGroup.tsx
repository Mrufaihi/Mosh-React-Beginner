//Imports
import { func } from 'prop-types';
import { MouseEvent } from 'react';

//COMPONENT
function ListGroup() {
  //array
  let items = ['Tokyo', 'Saudi arabia', 'USA', 'Amesterdam'];
  //Event Handler
  const handleClick = (event: MouseEvent) => console.log('clicked.. ', event); //TS TypeAnnoation(type-note) | (:type)
  // Mapping
  const mappedLists = items.map((item) => (
    <li className="list-group-item" key={item} onClick={handleClick}>
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
