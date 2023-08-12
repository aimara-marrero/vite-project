//import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default function TodoList({
  todos,
  handleCompleteTodo,
  handleDeleteTodo,
  handleUpdateTodo
}) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleCompleteTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleUpdateTodo: PropTypes.func.isRequired
};
