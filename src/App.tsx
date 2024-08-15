//imports
import { useState } from 'react';
import ListGroup from './components/ListGroup'; //automatically looks for index.ts in that folder
import './App.css';

function App() {
  const listItems = ['California', 'New Londo', 'Jeddah'];
  return (
    <>
      <ListGroup listItem={listItems} heading="Cities" />
    </>
  );
}

// export App component(fun) to other files
export default App;
