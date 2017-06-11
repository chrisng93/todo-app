import * as actionTypes from '../constants/actionTypes';

const initialError = {
  status: false,
  message: '',
};

const initialState = {
  todoLists: {}, // object of todo lists w/ key being the list name
  currentTodoList: {}, // current/selected todo list w/ name and todos keys
  isCreatingTodoList: false, // is in the middle of an API call to create todo list
  isDeletingTodoList: false, // is in the middle of an API call to delete todo list
  isAddingTodo: false, // is in the middle of an API call to add todo
  error: initialError, // error state
};

export default function todoReducer(state = initialState, action) {
  const { type, payload } = action;
  const todoLists = { ...state.todoLists };
  switch (type) {
    case actionTypes.CREATE_TODO_LIST_PENDING:
      return {
        ...state,
        isCreatingTodoList: true,
      };
    case actionTypes.CREATE_TODO_LIST_SUCCESS:
      todoLists[payload.list.id] = payload.list;
      return {
        ...state,
        todoLists,
        isCreatingTodoList: false,
        error: initialError,
      };
    case actionTypes.CREATE_TODO_LIST_FAILURE:
      return {
        ...state,
        isCreatingTodoList: false,
        error: { status: true, message: payload.error },
      };

    case actionTypes.DELETE_TODO_LIST_PENDING:
      return {
        ...state,
        isDeletingTodoList: true,
      };
    case actionTypes.DELETE_TODO_LIST_SUCCESS:
      delete todoLists[payload.id];
      return {
        ...state,
        todoLists,
        isDeletingTodoList: false,
        error: initialError,
      };
    case actionTypes.DELETE_TODO_LIST_FAILURE:
      return {
        ...state,
        isDeletingTodoList: false,
        error: { status: true, message: payload.error },
      };

    case actionTypes.SELECT_TODO_LIST:
      return {
        ...state,
        currentTodoList: state.todoLists[payload.id],
      };

    case actionTypes.ADD_TODO_PENDING:
      return {
        ...state,
        isAddingTodo: true,
      };
    case actionTypes.ADD_TODO_SUCCESS:
      const currentTodoList = { ...state.currentTodoList };
      currentTodoList.todos.push(payload.todo);
      todoLists[currentTodoList.id] = currentTodoList;
      return {
        ...state,
        todoLists,
        currentTodoList,
        isAddingTodo: false,
        error: initialError,
      };
    case actionTypes.ADD_TODO_FAILURE:
      return {
        ...state,
        isAddingTodo: false,
        error: { status: true, message: payload.error },
      };

    default:
      return state;
  }
}
