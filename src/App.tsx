//imports
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

//type safety&autoCompletion for what we want to use | then insert inside <>
interface UserData {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<UserData[]>([]); //to avoid 'never'

  useEffect(() => {
    //fetch info from server
    axios
      .get<UserData[]>('https://jsonplaceholder.typicode.com/users') //may take some time (promise)
      .then((response) => setUsers(response.data)); //after promised response is received
  }, []); // cause we setState, must avoid infnite loop

  console.log(users);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}: {user.id}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
