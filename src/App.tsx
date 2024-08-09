//imports

import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const hi = () => console.log('hi');
  return (
    <>
      <Alert>Alert!</Alert>

      <Button color="primary" onHandleClick={hi}>
        HI CLICK
      </Button>

      <Button color="info" onHandleClick={hi}>
        LOOL CLICK HERE!
      </Button>

      <Button color="warning" onHandleClick={hi}>
        XD CLICK
      </Button>
    </>
  );
}

// export App component(fun) to other files
export default App;
