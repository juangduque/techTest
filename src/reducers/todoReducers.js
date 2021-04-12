import { ADD_TODO, ITEM_TODO_DONE } from '../types/todoTypes.js';

const todoReducers = (state = [], action) => {
  switch( action.type ){
    case ADD_TODO:
      return [
        ...state, {
          todoID: action.id,
          text: action.text,
          done: false
        }
      ]
    case ITEM_TODO_DONE:      
      const pseudoState = Object.assign({}, state)   
      pseudoState[ action.id ].done = !pseudoState[ action.id ].done   
      return state
    default:
      return state;
  }
}

export default todoReducers;
