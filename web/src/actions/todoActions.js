import * as actionTypes from '../constants/actionTypes';

const addTodoPending = () => {
  return {
    type: actionTypes.ADD_TODO_PENDING,
  }
};

const addTodoSuccess = (payload) => {
  return {
    type: actionTypes.ADD_TODO_SUCCESS,
    payload,
  }
};

const addTodoFailure = (payload) => {
  return {
    type: actionTypes.ADD_TODO_FAILURE,
    payload,
  }
};

const completeTodoPending = () => {
  return {
    type: actionTypes.COMPLETE_TODO_PENDING,
  }
};

const completeTodoSuccess = (payload) => {
  return {
    type: actionTypes.COMPLETE_TODO_SUCCESS,
    payload,
  }
};

const completeTodoFailure = (payload) => {
  return {
    type: actionTypes.COMPLETE_TODO_FAILURE,
    payload,
  }
};

export const addTodo = (payload) => {
  return (dispatch) => {

  }
};
