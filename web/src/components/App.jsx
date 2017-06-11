import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import TodoLists from './TodoLists';
import AddTodos from './AddTodos';
import TodoList from './TodoList';
import Footer from './Footer';

const propTypes = {
  getTodoLists: T.func,
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { getTodoLists } = this.props;
    getTodoLists();
  }

  render() {
    return (
      <div id="app">
        <div className="todo-list-wrapper">
          <h1>Todos</h1>
          <TodoLists />
          <AddTodos />
          <TodoList />
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodoLists: bindActionCreators(actions.getTodoLists, dispatch),
  };
};

App.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(App);
