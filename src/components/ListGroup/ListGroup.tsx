//imports
import { useState } from 'react';
import styles from './ListGroup.module.css';

// props Interface
interface Props {
  listItem: string[];
  heading: string;
  // onHandleClick: (item: string) => void;
}

//props -> {listItems, heading}
function ListGroup({ listItem, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1); //to control each item thro its index (-1 init)

  const listMapped = listItem.map((item: string, index: number) => {
    return (
      <li
        key={index}
        className={
          selectedIndex === index ? 'list-group-item active' : 'list-group-item'
        }
        onClick={() => {
          setSelectedIndex(index);
          // onHandleClick(item);
        }}
      >
        {item}
      </li>
    );
  });

  return (
    <>
      <h1>{heading}</h1>
      <ul className={[styles.listGroup, styles.container].join(' ')}>
        {listMapped}
      </ul>
    </>
  );
}
export default ListGroup;
