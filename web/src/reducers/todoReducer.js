import * as actionTypes from '../constants/actionTypes';

const initialError = {
  status: false,
  message: '',
};

const initialState = {
  todoLists: {}, // object of todo lists w/ key being the list name
  currentTodoList: {}, // current/selected todo list w/ name and todos keys
  isGettingTodoLists: false, // is in the middle of an API call to get all todo lists
  isCreatingTodoList: false, // is in the middle of an API call to create todo list
  isDeletingTodoList: false, // is in the middle of an API call to delete todo list
  isAddingTodo: false, // is in the middle of an API call to add todo
  isTogglingTodo: false, // is in the middle of an API call to toggle todo
  isMarkingAllComplete: false, // is in the middle of an API call to mark all todos complete
  error: initialError, // error state
};

export default function todoReducer(state = initialState, action) {
  const { type, payload } = action;
  let todoLists = { ...state.todoLists };
  let currentTodoList = { ...state.currentTodoList };
  switch (type) {
    case actionTypes.GET_TODO_LISTS_PENDING:
      return {
        ...state,
        isGettingTodoLists: true,
      };
    case actionTypes.GET_TODO_LISTS_SUCCESS:
      const lists = {};
      for (let i = 0; i < payload.lists.length; i++) {
        lists[payload.lists[i].id] = payload.lists[i]
      }
      return {
        ...state,
        todoLists: lists,
        isGettingTodoLists: false,
        error: initialError,
      };
    case actionTypes.GET_TODO_LISTS_FAILURE:
      return {
        ...state,
        isGettingTodoLists: false,
        error: { status: true, message: payload.error },
      };

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
      if (payload.id === currentTodoList.id) {
        currentTodoList = {};
      }
      return {
        ...state,
        todoLists,
        currentTodoList,
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

    case actionTypes.TOGGLE_TODO_PENDING:
      return {
        ...state,
        isTogglingTodo: true,
      };
    case actionTypes.TOGGLE_TODO_SUCCESS:
      for (let i = 0; i < currentTodoList.todos.length; i++) {
        if (currentTodoList.todos[i].id === payload.todo.id) {
          currentTodoList.todos[i] = payload.todo;
        }
      }
      todoLists[currentTodoList.id] = currentTodoList;
      return {
        ...state,
        todoLists,
        currentTodoList,
        isTogglingTodo: false,
        error: initialError,
      };
    case actionTypes.TOGGLE_TODO_FAILURE:
      return {
        ...state,
        isTogglingTodo: false,
        error: { status: true, message: payload.error },
      };

    case actionTypes.MARK_ALL_COMPLETE_PENDING:
      return {
        ...state,
        isMarkingAllComplete: true,
      };
    case actionTypes.MARK_ALL_COMPLETE_SUCCESS:
      currentTodoList = payload.list;
      todoLists[currentTodoList.id] = currentTodoList;
      return {
        ...state,
        todoLists,
        currentTodoList,
        isMarkingAllComplete: false,
        error: initialError,
      };
    case actionTypes.MARK_ALL_COMPLETE_FAILURE:
      return {
        ...state,
        isMarkingAllComplete: false,
        error: { status: true, message: payload.error },
      };

    default:
      return state;
  }
}
