import { ADD_TODO } from '../types/todoTypes.js';

const todoReducers = (state = [], action) => {
  switch( action.type ){
    case ADD_TODO:
      return [
        ...state, {
          todoID: action.id,
          text: action.text,
        }
      ]
    default:
      return state;
  }
}

export default todoReducers;
