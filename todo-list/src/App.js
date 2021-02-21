import { useState } from 'react';
import Login from './Login/Login';
import TodosList from './List/TodosList';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      {loggedIn ? (
        <TodosList setLoggedIn={setLoggedIn} />
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
};

export default App;
