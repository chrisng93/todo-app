import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import { currentTodoListSelector } from '../selectors/todoSelectors';
import Todo from './Todo';

const propTypes = {
  currentTodoList: T.object.isRequired,

  toggleTodo: T.func,
};

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.onToggleTodo = this.onToggleTodo.bind(this);
  }

  onToggleTodo(id, isCompleted) {
    const { toggleTodo } = this.props;
    toggleTodo({ id, isCompleted: !isCompleted });
  }

  render() {
    const { currentTodoList } = this.props;
    return (
      <div className="todolist">
        {currentTodoList && currentTodoList.todos ?
          currentTodoList.todos.map(todo =>
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodo={this.onToggleTodo}
            />
          ) :
          null}
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
    toggleTodo: bindActionCreators(actions.toggleTodo, dispatch),
  };
};

TodoList.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
