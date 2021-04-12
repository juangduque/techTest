import { ADD_TODO } from '../types/todoTypes.js';

let todoId = 1;
export const addTodo = (text) => {
  return{
    type: ADD_TODO,
    id: todoId++,
    text
  }
}