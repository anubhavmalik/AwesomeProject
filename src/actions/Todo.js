import {ADD_TODO, REMOVE_TODO} from './types';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  data: todo,
});

export const deleteTodo = (key) => ({
  type: REMOVE_TODO,
  key: key,
});
