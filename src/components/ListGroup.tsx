import { func } from 'prop-types';

//LIST GROUP COMPONENT
function ListGroup() {
  let items = ['Tokyo', 'Saudi arabia', 'USA', 'Amesterdam'];
  const mappedLists = items.map((item) => (
    <li key={item}> {item} </li> //map each item between <li> element (also add unique key)
  ));

  const ifEmpty = items.length === 0 && <p>Empty</p>; //.length (true) && <p>:Empty (truthy) | return 2nd

  //#1   if (items.length === 0) {
  //     return (
  //       // any html +2 elements need to be wraped with fragment <>
  //       <>
  //         <h1>List Group</h1>
  //         <p>Empty</p>
  //       </>
  //     );
  //   }
  //#2 (items.length === 0) ? <p>Empty array</p> : null;

  return (
    // only expression allowed inside
    <>
      <h1>List Group</h1>
      {ifEmpty}
      <ul className="list-group">{mappedLists}</ul>
    </>
  );
}

export default ListGroup;
