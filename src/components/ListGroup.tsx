//imports
import { MouseEvent } from 'react';
function ListGroup() {
  const listItem = ['New Londo', 'Orlondo', 'Drake Valley', 'Undead Burge'];

  const listMapped = listItem.map((item: string, index: number) => {
    return (
      <li key={index} className="list-group-item" onClick={handleClickChange}>
        {item}
      </li>
    );
  });
  //   type annotaction for onClick is MouseEvent
  function handleClickChange(event: MouseEvent) {
    console.log(event);
  }

  const noItems = listItem.length === 0 && 'No items in list';

  return (
    <>
      <h1>List Group</h1>
      {noItems}
      <ul className="list-group">{listMapped}</ul>
    </>
  );
}
export default ListGroup;
