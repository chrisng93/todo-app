import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux';
import * as actions from '../actions';

const propTypes = {

};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="app">
        Hello World!
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

App.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(App);
