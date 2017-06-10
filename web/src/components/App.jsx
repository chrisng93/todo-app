import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import TodoLists from './TodoLists';
import AddTodos from './AddTodos';
import TodoList from './TodoList';

const propTypes = {

};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="app">
        <h1>Todos</h1>
        <TodoLists />
        <AddTodos />
        <TodoList />
        {/*<Footer />*/}
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
