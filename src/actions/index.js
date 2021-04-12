import { ADD_TODO, ITEM_TODO_DONE } from '../types/todoTypes.js';


let todoId = 0;
export const addTodo = (text) => {
  return{
    type: ADD_TODO,
    id: todoId++,
    text
  }
}

export const markTodoDone = (id)=> {
  return{
    type: ITEM_TODO_DONE,
    id
  }
}