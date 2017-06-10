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
  }

  render() {
    const { todoLists } = this.props;
    return(
      <div className="todolists">
        {todoLists.map(todoList =>
          <span key={todoList.name} className="todolists-list">
            <span className="todolists-list-name">{todoList.name}</span>
            <button className="todolists-list-delete">x</button>
          </span>
        )}
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
  return {};
};

TodoLists.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);
