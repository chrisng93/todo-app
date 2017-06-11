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

export const currentRemainingSelector = createSelector(
  todoStateSelector,
  todoState => {
    if (todoState.currentTodoList.todos) {
      const done = todoState.currentTodoList.todos.reduce((doneAccumulated, todo) => {
        if (todo.is_completed) {
          return doneAccumulated + 1;
        }
        return doneAccumulated;
      }, 0);
      return todoState.currentTodoList.todos.length - done;
    }
    return 0;
  }
);

export const isGettingTodoListsSelector = createSelector(
  todoStateSelector,
  todoState => todoState.isGettingTodoLists
);

export const isCreatingTodoListSelector = createSelector(
  todoStateSelector,
  todoState => todoState.isCreatingTodoList
);

export const isDeletingTodoListSelector = createSelector(
  todoStateSelector,
  todoState => todoState.isDeletingTodoList
);

export const isAddingTodoSelector = createSelector(
  todoStateSelector,
  todoState => todoState.isAddingTodo
);

export const isTogglingTodoSelector = createSelector(
  todoStateSelector,
  todoState => todoState.isTogglingTodo
);

export const isMarkingAllCompleteSelector = createSelector(
  todoStateSelector,
  todoState => todoState.isMarkingAllComplete
);

export const todoErrorSelector = createSelector(
  todoStateSelector,
  todoState => todoState.error
);
