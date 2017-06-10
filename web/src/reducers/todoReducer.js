import * as actionTypes from '../constants/actionTypes';

const initialError = {
  status: false,
  message: '',
};

const todoLists = {
  test1: {id: 1, name: 'test1', todos: []},
  test2: {id: 2, name: 'test2', todos: []},
};

const initialState = {
  todoLists: todoLists, // object of todo lists w/ key being the list name
  currentTodoList: {}, // current/selected todo list w/ name and todos keys
  isCreatingTodoList: false, // is in the middle of an API call to create todo list
  isAddingTodo: false, // is in the middle of an API call to add todo
  error: initialError, // error state
};

export default function todoReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CREATE_TODO_LIST_PENDING:
      return state;
    case actionTypes.CREATE_TODO_LIST_SUCCESS:
      return state;
    case actionTypes.CREATE_TODO_LIST_FAILURE:
      return state;

    case actionTypes.DELETE_TODO_LIST_PENDING:
      return state;
    case actionTypes.DELETE_TODO_LIST_SUCCESS:
      return state;
    case actionTypes.DELETE_TODO_LIST_FAILURE:
      return state;

    case actionTypes.SELECT_TODO_LIST:
      return {
        ...state,
        currentTodoList: state.todoLists[payload.id],
      };

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
