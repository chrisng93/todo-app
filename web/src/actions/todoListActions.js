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

const markAllCompletePending = () => {
  return {
    type: actionTypes.MARK_ALL_COMPLETE_PENDING,
  }
};

const markAllCompleteSuccess = (payload) => {
  return {
    type: actionTypes.MARK_ALL_COMPLETE_SUCCESS,
    payload,
  }
};

const markAllCompleteFailure = (payload) => {
  return {
    type: actionTypes.MARK_ALL_COMPLETE_FAILURE,
    payload,
  }
};

export const createTodoList = (payload) => {
  return (dispatch) => {
    dispatch(createTodoListPending());
    const url = `${process.env.API_URL}/api/list`;
    const options = {
      method: 'POST',
      headers: createHeaders(),
      body: JSON.stringify(payload),
    };
    return fetch(url, options)
      .then(response => response.json())
      .then(json => dispatch(createTodoListSuccess(json)))
      .catch(error => dispatch(createTodoListFailure({ error })));
  }
};

export const deleteTodoList = (payload) => {
  return (dispatch) => {
    dispatch(deleteTodoListPending());
    const url = `${process.env.API_URL}/api/list/${payload.id}`;
    const options = {
      method: 'DELETE',
      headers: createHeaders(),
    };
    return fetch(url, options)
      .then(response => dispatch(deleteTodoListSuccess({ id: payload.id })))
      .catch(error => dispatch(deleteTodoListFailure({ error })));
  }
};

export const selectTodoList = (payload) => {
  return (dispatch) => dispatch({
    type: actionTypes.SELECT_TODO_LIST,
    payload,
  })
};

export const markAllComplete = (payload) => {
  return (dispatch) => {
    dispatch(markAllCompletePending());
    const url = `${process.env.API_URL}/api/list/${payload.id}/complete`;
    const options = {
      method: 'PUT',
      headers: createHeaders(),
    };
    return fetch(url, options)
      .then(response => response.json())
      .then(json => dispatch(markAllCompleteSuccess(json)))
      .catch(error => dispatch(markAllCompleteFailure({ error })));
  }
};
