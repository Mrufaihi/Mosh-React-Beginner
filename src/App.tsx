//imports
import ListGroup from './components/ListGroup';

function App() {
  const listCities = ['New Londo', 'Orlondo', 'Drake Valley', 'Undead Burge'];
  const listCompanies = ['Apple', 'Goole', 'MicroCenter', 'Microsoft'];
  return (
    <>
      <ListGroup listItem={listCities} heading="Cities" />
      <ListGroup listItem={listCompanies} heading="Companies" />
    </>
  );
}

// export App component(fun) to other files
export default App;
