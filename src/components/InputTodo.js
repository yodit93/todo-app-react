import { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const handleValueChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
      setMessage('');
    } else {
      setMessage('Please add item');
    }
  };
  return (
    <>
      <form className="input-todo" onSubmit={handleSubmit}>
        <input id="write-todo" type="text" placeholder="Add todo..." onChange={handleValueChange} value={inputValue} />
        <button className="add-todo" type="submit">Add</button>
      </form>
      <span>{message}</span>
    </>
  );
};

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default InputTodo;
