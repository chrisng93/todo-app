import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import { todoListsSelector } from '../selectors/todoSelectors';

const propTypes = {
  todoLists: T.object.isRequired,

  createTodoList: T.func,
  deleteTodoList: T.func,
  selectTodoList: T.func,
};

class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: '',
      selectedTodoList: props.todoLists[Object.keys(props.todoLists)[0]].id,
    };
    this.selectTodoList = this.selectTodoList.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onCreateTodoList = this.onCreateTodoList.bind(this);
  }

  selectTodoList(id) {
    this.props.selectTodoList(id);
    this.setState({ selectedTodoList: id });
  }

  onDeleteTodoList(e, todoListId) {
    e.preventDefault();
    this.props.deleteTodoList(todoListId);
  }

  onChangeInput(name) {
    this.setState({ newList: name });
  }

  onCreateTodoList(e) {
    e.preventDefault();
    this.props.createTodoList(this.state.newList);
  }

  render() {
    const { todoLists, deleteTodoList } = this.props;
    const { newList, selectedTodoList } = this.state;
    return(
      <div className="todolists">
        <div className="todolists-lists">
          {todoLists.map(todoList =>
            <span
              key={todoList.id}
              className={`todolists-lists-list ${selectedTodoList === todoList.id ? 'selected' : null}`}
            >
              <span
                className="todolists-lists-list-name"
                onClick={() => this.selectTodoList(todoList.id)}
              >
                {todoList.name}
              </span>
              <button
                className="todolists-lists-list-delete"
                onClick={(e) => this.onDeleteTodoList(e, todoList.id)}
              >
                x
              </button>
            </span>
          )}
        </div>
        <form className="todolists-add">
          <input value={newList} onChange={(e) => this.onChangeInput(e.target.value)} />
          <button onClick={(e) => this.onCreateTodoList(e)}>Create todo list</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoLists: todoListsSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTodoList: bindActionCreators(actions.createTodoList, dispatch),
    deleteTodoList: bindActionCreators(actions.deleteTodoList, dispatch),
    selectTodoList: bindActionCreators(actions.selectTodoList, dispatch),
  };
};

TodoLists.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);
