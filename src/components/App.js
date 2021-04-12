import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


let App = ( props ) => {
  const { dispatch } = props;
  let input;


  return(
    <form onSubmit={e => { e.preventDefault()
      if(input.value === ""){
        return;
      }
      
      dispatch( addTodo(  input.value ))
      input.value = ""
     }}>
      <input ref={ node => {
        input = node
      }}
      />
      <button type="submit">
        Add todo
      </button>
      <ul>
        {
          props.todos.map( item => {
            return <li key={ item.todoID }>{ item.text }</li>
          })
        }
      </ul>
    </form>
  );
};

const mapStateToProps = (state) =>{
  return { todos: state.todoReducers};
}

export default connect(mapStateToProps, null)(App);