//imports
import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <>
      <Button color="primary" onHandleClick={() => {}}>
        Click
      </Button>

      <Button color="secondary" onHandleClick={() => {}}>
        Click
      </Button>
    </>
  );
}

// export App component(fun) to other files
export default App;
