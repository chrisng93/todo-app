/**
 * All action names should be defined here
 */
import { createTodoList, deleteTodoList, selectTodoList } from './todoListActions';
import { addTodo, toggleTodo } from './todoActions';

module.exports = {
  // todo list actions
  createTodoList,
  deleteTodoList,
  selectTodoList,

  // todo actions
  addTodo,
  toggleTodo,
};
