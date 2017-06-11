import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import { todoListsSelector } from '../selectors/todoSelectors';

const propTypes = {
  todoLists: T.array.isRequired,

  createTodoList: T.func,
  deleteTodoList: T.func,
  selectTodoList: T.func,
};

class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: '',
      selectedTodoList: null,
    };
    this.selectTodoList = this.selectTodoList.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onCreateTodoList = this.onCreateTodoList.bind(this);
  }

  selectTodoList(id) {
    const { selectTodoList } = this.props;
    selectTodoList({ id });
    this.setState({ selectedTodoList: id });
  }

  onDeleteTodoList(e, todoListId) {
    const { deleteTodoList } = this.props;
    e.preventDefault();
    deleteTodoList({ id: todoListId });
  }

  onChangeInput(name) {
    this.setState({ newList: name });
  }

  onCreateTodoList(e) {
    const { createTodoList } = this.props;
    const { newList } = this.state;
    e.preventDefault();
    if (newList) {
      createTodoList({ name: newList });
      this.setState({ newList: '' });
    }
  }

  render() {
    const { todoLists } = this.props;
    const { newList, selectedTodoList } = this.state;
    return (
      <div className="todolists">
        <div className="todolists-lists">
          {todoLists.map(todoList =>
            <div
              key={todoList.id}
              className={`todolists-lists-list ${selectedTodoList === todoList.id ? 'selected' : null}`}
            >
              <div
                className="todolists-lists-list-name"
                onClick={() => this.selectTodoList(todoList.id)}
              >
                {todoList.name}
              </div>
              <button
                className="todolists-lists-list-delete"
                onClick={(e) => this.onDeleteTodoList(e, todoList.id)}
              >
                x
              </button>
            </div>
          )}
        </div>
        <form className="todolists-add">
          <input placeholder="What do you want to name this list?" value={newList} onChange={(e) => this.onChangeInput(e.target.value)} />
          <button onClick={(e) => this.onCreateTodoList(e)}>Create List</button>
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
