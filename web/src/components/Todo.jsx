import React, { PropTypes as T } from 'react';

const propTypes = {
  id: T.string.isRequired,
  description: T.string.isRequired,
};

export default function Todo({ id, description }) {
  return (
    <div className="todo">
      <input type="checkbox" onClick={() => this.onCompleteTodo(id)} />
      <span className="todo-description">{description}</span>
    </div>
  );
}

Todo.propTypes = propTypes;
