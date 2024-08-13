//imports
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [visible, setVisible] = useState(false);

  const close = () => setVisible(false);

  return (
    <>
      {/* if true and truthy */}
      {visible && <Alert onClose={close}>WEOOHOO!</Alert>}

      <button onClick={() => setVisible(true)} className="btn btn-primary">
        Click- alert
      </button>
    </>
  );
}

// export App component(fun) to other files
export default App;
