import PropTypes from 'prop-types';
import { useState } from 'react';

const TodoItem = ({
  todo, setTodos, handleDelete, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  const handlechange = (id) => {
    setTodos((preState) => preState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className="list">
      <div className="list-rapper" style={viewMode}>
        <div className="todo-status">
          <input type="checkbox" className="checkbox" checked={todo.completed} onChange={() => handlechange(todo.id)} />
          <span className="title" style={todo.completed ? completedStyle : null}>{todo.title}</span>
        </div>
        <div className="todo-status">
          <button type="button" className="btn" onClick={() => setEditing(true)}>Edit</button>
          <button type="button" className="btn" onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      </div>
      <input
        className="text-input"
        type="text"
        value={todo.title}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, todo.id)}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default TodoItem;
