import React from 'react';
import { connect } from 'react-redux';
import {  markTodoDone } from '../actions';

let TodoList = (props) => {
  let todosItems = []
  const { dispatch } = props;


  // todosItems.push(
  //   props.todos.map( item => {
  //     return <li 
  //       key={ item.todoID }
  //       onClick={ () => {
  //         dispatch( markTodoDone( item.todoID ))  
                                  
  //       }}
  //       // onClick={ () => props.todoClicked( item.todoID )}
  //       style={{
  //         textDecoration: item.done ? 'line-through' : 'none'
  //       }}
  //     >{ item.text }</li>
  //   })
  // )

  todosItems.push(
    props.todos.map( item => {
      return <li 
        key={ item.todoID }
        onClick={ () => { props.todoClicked( item.todoID )}}
        style={{
          textDecoration: item.done ? 'line-through' : 'none'
        }}
      >{ item.text }</li>
    })
  )

  return(
    <ul>
      {todosItems}
    </ul>
  )
}

const mapStateToProps = (state) =>{
  return { todos: state.todoReducers};
}

const mapDispatchToProps = (dispatch) => {
  return {
    todoClicked: (id) => {
      dispatch( markTodoDone( id ))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

