//import React from 'react';
import { BsTrash3 } from 'react-icons/bs';
import PropTypes from 'prop-types'; // Importa PropTypes

import TodoUpdate from './TodoUpdate';

export default function TodoItem({
  todo,
  handleCompleteTodo,
  handleDeleteTodo,
  handleUpdateTodo
}) {
  return (
    <li>
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <label className={`container-done ${todo.done ? 'active' : ''}`}></label>
      </span>
      <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <button className="btn-delete" onClick={() => handleDeleteTodo(todo.id)}>
        <BsTrash3 />
      </button>
    </li>
  );
}

// Define la validación de PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleCompleteTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleUpdateTodo: PropTypes.func.isRequired
};

