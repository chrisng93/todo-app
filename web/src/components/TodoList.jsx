import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions';

const propTypes = {

};

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="todolist">
        Todo List
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

TodoList.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
