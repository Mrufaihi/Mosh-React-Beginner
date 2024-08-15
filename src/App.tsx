//imports
import { useState } from 'react';
import './App.css';
import Like from './components/Like';
function App() {
  return <Like onHandleClick={() => console.log('Clicked')} />;
}

// export App component(fun) to other files
export default App;
