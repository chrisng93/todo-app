import { createSelector } from 'reselect';

const todoStateSelector = state => state.todo;

export const todoListsSelector = createSelector(
  todoStateSelector,
  todoState => Object.keys(todoState.todoLists).map(key => todoState.todoLists[key])
);

export const currentTodoListSelector = createSelector(
  todoStateSelector,
  todoState => todoState.currentTodoList
);

export const isAddingTodoSelector = createSelector(
  todoStateSelector,
  todoState => todoState.isAddingTodo
);

export const todoErrorSelector = createSelector(
  todoStateSelector,
  todoState => todoState.error
);