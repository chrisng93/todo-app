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

const deleteTodoListPending = () => {
  return {
    type: actionTypes.DELETE_TODO_LIST_PENDING,
  }
};

const deleteTodoListSuccess = (payload) => {
  return {
    type: actionTypes.DELETE_TODO_LIST_SUCCESS,
    payload,
  }
};

const deleteTodoListFailure = (payload) => {
  return {
    type: actionTypes.DELETE_TODO_LIST_FAILURE,
    payload,
  }
};

export const createTodoList = (payload) => {
  return (dispatch) => {

  }
};

export const deleteTodoList = (payload) => {
  return (dispatch) => {

  }
};

export const selectTodoList = (payload) => {
  return (dispatch) => dispatch({
    type: actionTypes.SELECT_TODO_LIST,
    payload,
  })
};
