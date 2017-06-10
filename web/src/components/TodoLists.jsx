import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import { todoListsSelector } from '../selectors/todoSelectors';

const propTypes = {

};

class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addListName: '',
    };
    this.selectTodoList = this.selectTodoList.bind(this);
    this.deleteTodoList = this.deleteTodoList.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  selectTodoList() {

  }

  deleteTodoList() {

  }

  onChangeInput(name) {
    this.setState({ addListName: name });
  }

  render() {
    const { todoLists } = this.props;
    const { addListName } = this.state;
    return(
      <div className="todolists">
        <div className="todolists-lists">
          {todoLists.map(todoList =>
            <span key={todoList.name} className="todolists-lists-list">
              <span className="todolists-lists-list-name" onClick={this.selectTodoList}>
                {todoList.name}
              </span>
              <button className="todolists-lists-list-delete" onClick={this.deleteTodoList}>
                x
              </button>
            </span>
          )}
        </div>
        <form className="todolists-add">
          <input value={addListName} onChange={(e) => this.onChangeInput(e.target.value)} />
          <button>Create todo list</button>
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

  };
};

TodoLists.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);
