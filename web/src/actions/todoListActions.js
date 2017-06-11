import * as actionTypes from '../constants/actionTypes';
import { createHeaders } from '../utils/requestUtils';

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

const createTodoListFailure = (error) => {
  return {
    type: actionTypes.CREATE_TODO_LIST_FAILURE,
    error,
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

const deleteTodoListFailure = (error) => {
  return {
    type: actionTypes.DELETE_TODO_LIST_FAILURE,
    error,
  }
};

export const createTodoList = (payload) => {
  return (dispatch) => {
    const url = `${process.env.API_URL}/api/list`;
    const options = {
      method: 'POST',
      headers: createHeaders(),
      body: JSON.stringify({
        name: payload.name,
      }),
    };
    return fetch(url, options)
      .then(response => response.json())
      .then(payload => dispatch(createTodoListSuccess(payload)))
      .catch(error => dispatch(createTodoListFailure(error)));
  }
};

export const deleteTodoList = (payload) => {
  return (dispatch) => {
    const url = `${process.env.API_URL}/api/list/${payload.id}`;
    const options = {
      method: 'DELETE',
      headers: createHeaders(),
    };
    return fetch(url, options)
      .then(response => dispatch(deleteTodoListSuccess({ id: payload.id })))
      .catch(error => dispatch(deleteTodoListFailure(error)));
  }
};

export const selectTodoList = (payload) => {
  return (dispatch) => dispatch({
    type: actionTypes.SELECT_TODO_LIST,
    payload,
  })
};
