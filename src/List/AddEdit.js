const Edit = ({ setTodos, setAddEdit, selectedTodo, setSelectedTodo }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    let list = JSON.parse(localStorage.getItem('list'));
    if (!list) {
      localStorage.setItem('list', JSON.stringify([selectedTodo]));
      setTodos([selectedTodo]);
    } else {
      localStorage.setItem('list', JSON.stringify([...list, selectedTodo]));
      setTodos([...list, selectedTodo]);
    }
    setSelectedTodo('');
    setAddEdit(false);
  };

  return (
    <form className="add" onSubmit={onSubmit}>
      <input
        type="text"
        value={selectedTodo}
        required
        maxLength="25"
        onChange={(e) => setSelectedTodo(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
};

export default Edit;
