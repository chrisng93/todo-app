import * as actionTypes from '../constants/actionTypes';

const createTodoListPending = () => {
  return {
    type: actionTypes.CREATE_TODO_LIST_PENDING,
  }
};

const createTodoListSuccess = (payload) => {
  return {
    type: actionTypes.CREATE_TODO_LIST_SUCCESS,
    payload,
  }
};

const createTodoListFailure = (payload) => {
  return {
    type: actionTypes.CREATE_TODO_LIST_FAILURE,
    payload,
  }
};

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

export const createTodoList = (payload) => {
  return (dispatch) => {

  }
};

export const addTodo = (payload) => {
  return (dispatch) => {

  }
};
