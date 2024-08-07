function ListGroup() {
  const list = ['New Londo', 'Orlondo', 'Drake Valley', 'Undead Burge'];

  const listMapped = list.map((element: string, index: number) => {
    return (
      <li key={index} className="list-group-item">
        {element}
      </li>
    );
  });

  const noItems = list.length === 0 && 'No items in list';

  return (
    <>
      <h1>List Group</h1>
      {noItems}
      <ul className="list-group">{listMapped}</ul>
    </>
  );
}
export default ListGroup;
