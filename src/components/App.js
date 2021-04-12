import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoList from './TodoList.jsx';

let App = ( props ) => {
  
  const { dispatch } = props;
  let input;

  return(
    <div>
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
        <TodoList />
      </form>
      {/* <div>
        <h4>Filter</h4>
        <h3></h3>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) =>{
  return { todos: state.todoReducers};
}

export default connect(mapStateToProps, null)(App);