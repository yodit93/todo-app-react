import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({
  todos, setTodos, handleDelete, setUpdate,
}) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        setTodos={setTodos}
        handleDelete={handleDelete}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

TodoList.propTypes = {
  setTodos: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default TodoList;
