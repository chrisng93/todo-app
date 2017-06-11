import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import { currentTodoListSelector } from '../selectors/todoSelectors';

const propTypes = {
  currentTodoList: T.object,

  addTodo: T.func,
};

class AddTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
  }

  onChangeInput(todo) {
    this.setState({ todo });
  }

  onAddTodo(e) {
    const { addTodo, currentTodoList } = this.props;
    const { todo } = this.state;
    e.preventDefault();
    if (todo) {
      addTodo({ description: todo, list_id: currentTodoList.id });
      this.setState({ todo: '' });
    }
  }

  render() {
    const { currentTodoList } = this.props;
    const { todo } = this.state;
    return (
      <form className="addtodos">
        <input placeholder="What needs to be done?" value={todo} onChange={(e) => this.onChangeInput(e.target.value)} />
        <button onClick={this.onAddTodo} disabled={currentTodoList && !currentTodoList.hasOwnProperty('id')}>Add Todo</button>
      </form>
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
    addTodo: bindActionCreators(actions.addTodo, dispatch),
  };
};

AddTodos.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AddTodos);
