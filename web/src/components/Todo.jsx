import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions';

const propTypes = {

};

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="addtodos">
        <input placeholder="What needs to be done?" />
        <button>Add Todo</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: bindActionCreators(actions.addTodo, dispatch),
  };
};

Todo.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
