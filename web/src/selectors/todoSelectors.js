import { createSelector } from 'reselect';

const todoStateSelector = state => state.todo;

export const todoListsSelector = createSelector(
  todoStateSelector,
  todoState => todoState.todoLists
) ;

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
