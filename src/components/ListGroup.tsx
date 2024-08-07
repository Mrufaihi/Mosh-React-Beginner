import { useState } from 'react';

//imports
function ListGroup() {
  const listItem = ['New Londo', 'Orlondo', 'Drake Valley', 'Undead Burge'];

  //let selectedIndex = 0; //this is local to this component and not recognized by React (useState instead)
  const [selectedIndex, setSelectedIndex] = useState(-1); //to control each item thro its index (-1 init)

  const listMapped = listItem.map((item: string, index: number) => {
    return (
      <li
        key={index}
        className={
          selectedIndex === index ? 'list-group-item active' : 'list-group-item'
        }
        onClick={() => setSelectedIndex(index)}
      >
        {item}
      </li>
    );
  });

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">{listMapped}</ul>
    </>
  );
}
export default ListGroup;
