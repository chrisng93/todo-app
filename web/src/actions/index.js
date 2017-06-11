/**
 * All action names should be defined here
 */
import { createTodoList, deleteTodoList, selectTodoList, markAllComplete } from './todoListActions';
import { addTodo, toggleTodo } from './todoActions';

module.exports = {
  // todo list actions
  createTodoList,
  deleteTodoList,
  selectTodoList,
  markAllComplete,

  // todo actions
  addTodo,
  toggleTodo,
};
