//imports
import { useState } from 'react';
import './App.css';
import { set } from 'immer/dist/internal';

function App() {
  const [pizza, setPizza] = useState({
    name: 'Pepporoni Pizza',
    toppings: ['Pipporoni', 'Tomato'],
  });

  const handleClick = (topping: string) => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, topping] });
  };

  return (
    <div>
      <button onClick={() => handleClick('cheese')}>add Topping</button>
      <p>{pizza.toppings.join('-')}</p>
    </div>
  );
}

// export App component(fun) to other files
export default App;
