import { createStore } from 'redux';
import { connect } from 'react-redux';

const counterReducer = (state = 0, action) => {
  switch(action.type){
    case "INCREMEMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

const store = createStore( counterReducer );

let Counter =() => {

  return(
    <div>
      <h1>{ store.getState() }</h1>
      <button onClick={() => {
        store.dispatch({type: "INCREMEMENT"})
        console.log(store.getState())
      }}>+</button>
      <button onClick={() => {
        store.dispatch({type: "DECREMENT"})
        console.log(store.getState())
      }}
      >-</button>
    </div>
  )
}

// export default Counter;
export default connect()(Counter)


