import { useState, useEffect } from 'react';
import AddEdit from './AddEdit';
import Todo from './Todo';
import { search } from '../util';

const TodosList = ({ setLoggedIn }) => {
  const [addEdit, setAddEdit] = useState(false);
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedTodo, setSelectedTodo] = useState('');

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('list')));
  }, []);

  const handleSearch = async (e) => {
    setSearchValue(e.target.value);
    let list = JSON.parse(localStorage.getItem('list'));
    const todoSelected = search(list, e.target.value);
    setTodos(todoSelected);
  };

  return (
    <div className="list">
      <h1>My Todo List</h1>
      <div className="search-container input-container">
        <i className="fas fa-search"></i>
        <input
          type="text"
          value={searchValue}
          placeholder="Search"
          onChange={handleSearch}
        />
        <button onClick={() => setAddEdit(!addEdit)}>New</button>
      </div>

      {addEdit && (
        <AddEdit
          setTodos={setTodos}
          setAddEdit={setAddEdit}
          selectedTodo={selectedTodo}
          setSelectedTodo={setSelectedTodo}
        />
      )}

      {todos &&
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo}
            setTodos={setTodos}
            setAddEdit={setAddEdit}
            setSelectedTodo={setSelectedTodo}
          />
        ))}

      <button onClick={() => setLoggedIn(false)}>Log Out</button>
    </div>
  );
};

export default TodosList;
