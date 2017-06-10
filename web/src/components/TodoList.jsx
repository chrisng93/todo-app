import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import { currentTodoListSelector } from '../selectors/todoSelectors';
import Todo from './Todo';

const propTypes = {
  currentTodoList: T.object.isRequired,

  completeTodo: T.func,
};

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.onCompleteTodo = this.onCompleteTodo.bind(this);
  }

  onCompleteTodo(todoId) {
    const { completeTodo } = this.props;
    completeTodo({ id: todoId });
  }

  render() {
    const { currentTodoList } = this.props;
    return (
      <div className="todolist">
        {currentTodoList.todos.map(todo =>
          <Todo
            key={todo.id}
            todo={todo}
            completeTodo={this.onCompleteTodo}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentTodoList: currentTodoListSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeTodo: bindActionCreators(actions.completeTodo, dispatch),
  };
};

TodoList.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
