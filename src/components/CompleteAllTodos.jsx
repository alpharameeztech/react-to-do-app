import React, {useContext} from 'react'
import {TodosContext} from "../context/TodosContext";

function CompleteAllTodos(props) {

  const {todos,setTodos} = useContext(TodosContext)
  function completeAllTodos(){
    const updatedTodos = todos.map(todo => {
      todo.isComplete = true;
      return todo;
    });

    setTodos(updatedTodos);
  }
  return (
      <div onClick={completeAllTodos} className="button">Check All</div>
  )
}

export default CompleteAllTodos