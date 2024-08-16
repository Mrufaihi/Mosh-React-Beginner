//imports
import { useState } from 'react';
import './App.css';

function App() {
  //cart is an obj. that has array of obj, inside one of its properties.
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'item-1', quantity: 1 },
      { id: 2, title: 'item-2', quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      // copy obj first
      ...cart,
      items: cart.items.map(
        (
          item //access inside prop into array of objs.
        ) => (item.id === 1 ? { ...item, quantity: 2 } : item) //map the array -> arr items are objs so copy&update only selected ones : else return item no copy
      ),
    });
  };

  return (
    <div>
      <button onClick={handleClick}>add Quantity = 2</button>
      {cart.items.map((items) =>
        items.id === 1 ? <p key={items.id}>Quantity: {items.quantity}</p> : null
      )}
    </div>
  );
}

// export App component(fun) to other files
export default App;
