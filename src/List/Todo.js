const Todo = ({ todo, setTodos, setAddEdit, setSelectedTodo }) => {
  const handleDelete = () => {
    let list = JSON.parse(localStorage.getItem('list'));
    let updatedList = list.filter((t) => t !== todo);
    localStorage.setItem('list', JSON.stringify(updatedList));
    setTodos(updatedList);
  };

  const handleEdit = () => {
    let list = JSON.parse(localStorage.getItem('list'));
    let updatedList = list.filter((t) => t !== todo);
    localStorage.setItem('list', JSON.stringify(updatedList));
    setTodos(updatedList);
    setSelectedTodo(todo);
    setAddEdit(true);
  };

  return (
    <div className="todo-container">
      <div className="todo">
        <p>{todo}</p>
      </div>

      <div className="icons">
        <i className="fas fa-pencil-alt" onClick={handleEdit}></i>
        <i className="fas fa-trash-alt" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Todo;
