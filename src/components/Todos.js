import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: uuid4(),
      title: 'Setup development environment',
      completed: false,
    },
    {
      id: uuid4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuid4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  const handleDelete = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const addTodo = (title) => {
    const newTodo = {
      title,
      id: uuid4(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const setUpdate = (newTitle, id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: newTitle,
        };
      }
      return todo;
    }));
  };
  return (
    <div>
      <InputTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        handleDelete={handleDelete}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default Todos;
