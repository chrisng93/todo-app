import * as actionTypes from '../constants/actionTypes';

const initialError = {
  status: false,
  message: '',
};

const initialState = {
  todoLists: {}, // object of todo lists w/ key being the list name
  currentTodoList: [], // current/selected todo list w/ each index being a todo
  isAddingTodo: false, // is in the middle of an API call to add todo
  error: initialError, // error state
};

export default function todoReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ADD_TODO_PENDING:
      return state;
    case actionTypes.ADD_TODO_SUCCESS:
      return state;
    case actionTypes.ADD_TODO_FAILURE:
      return state;

    default:
      return state;
  }
}
