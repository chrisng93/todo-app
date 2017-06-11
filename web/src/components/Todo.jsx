import React, { PropTypes as T } from 'react';

const propTypes = {
  todo: T.object.isRequired,

  toggleTodo: T.func,
};

export default function Todo({ todo, toggleTodo }) {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.is_completed}
        onChange={() => toggleTodo(todo.id, todo.is_completed )}
      />
      <span className="todo-description">{todo.description}</span>
    </div>
  );
}

Todo.propTypes = propTypes;
