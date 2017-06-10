import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions';

const propTypes = {

};

class TodoLists extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="todolists">
        Todo Lists
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

TodoLists.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);
