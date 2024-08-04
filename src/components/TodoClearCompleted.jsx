import React, {useContext} from 'react'
import PropTypes from "prop-types";
import {TodosContext} from "../context/TodosContext";

TodoClearCompleted.prototype={
  clearCompleted: PropTypes.func.isRequired,
}
function TodoClearCompleted(props) {
  const {todos,setTodos} = useContext(TodosContext)
  function clearCompleted(){
    setTodos([...todos].filter(todo => !todo.isComplete))
  }
  return (
      <button onClick={clearCompleted} className="button">Clear completed</button>
  )
}

export default TodoClearCompleted