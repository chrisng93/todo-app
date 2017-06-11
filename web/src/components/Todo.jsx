import React, { PropTypes as T } from 'react';

const propTypes = {
  todo: T.object.isRequired,

  toggleTodo: T.func,
};

export default function Todo({ todo, toggleTodo }) {
  return (
    <div className={`todo ${todo.is_completed ? 'completed' : null}`}>
      <input
        type="checkbox"
        checked={todo.is_completed}
        onChange={() => toggleTodo(todo.id, todo.is_completed )}
      />
      <div className="todo-description">{todo.description}</div>
    </div>
  );
}

Todo.propTypes = propTypes;
