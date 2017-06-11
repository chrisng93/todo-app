import * as actionTypes from '../constants/actionTypes';
import { createHeaders } from '../utils/requestUtils';

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

const toggleTodoPending = () => {
  return {
    type: actionTypes.TOGGLE_TODO_PENDING,
  }
};

const toggleTodoSuccess = (payload) => {
  return {
    type: actionTypes.TOGGLE_TODO_SUCCESS,
    payload,
  }
};

const toggleTodoFailure = (payload) => {
  return {
    type: actionTypes.TOGGLE_TODO_FAILURE,
    payload,
  }
};

export const addTodo = (payload) => {
  return (dispatch) => {
    dispatch(addTodoPending());
    const url = `${process.env.API_URL}/api/todo`;
    const options = {
      method: 'POST',
      headers: createHeaders(),
      body: JSON.stringify(payload),
    };
    return fetch(url, options)
      .then(response => response.json())
      .then(json => dispatch(addTodoSuccess(json)))
      .catch(error => dispatch(addTodoFailure({ error })));
  }
};

export const toggleTodo = (payload) => {
  return (dispatch) => {
    dispatch(toggleTodoPending());
    const url = `${process.env.API_URL}/api/todo/${payload.id}`;
    const options = {
      method: 'PUT',
      headers: createHeaders(),
      body: JSON.stringify({ is_completed: !payload.isCompleted }),
    };
    return fetch(url, options)
      .then(response => response.json())
      .then(json => dispatch(toggleTodoSuccess(json)))
      .catch(error => dispatch(toggleTodoFailure({ error })));
  }
};
