//imports
import { useState } from 'react';
import './App.css';

function App() {
  const [game, setGame] = useState({
    id: 1,
    // spread is shallow so it wont copy nested obj
    player: {
      name: 'Unranked',
      gender: 'male',
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: 'Josh' } });
  };

  return (
    <div>
      <button onClick={handleClick}>Change name</button>
      <p>{game.player.name}</p>
    </div>
  );
}

// export App component(fun) to other files
export default App;
