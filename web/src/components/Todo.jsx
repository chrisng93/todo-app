import React, { PropTypes as T } from 'react';

const propTypes = {
  todo: T.object.isRequired,

  completeTodo: T.func,
};

export default function Todo({ todo }) {
  return (
    <div className="todo">
      <input type="checkbox" onClick={() => this.onCompleteTodo(todo.id)} />
      <span className="todo-description">{todo.description}</span>
    </div>
  );
}

Todo.propTypes = propTypes;
