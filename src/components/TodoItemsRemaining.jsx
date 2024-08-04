import React, {useContext, useMemo} from 'react'
import {TodosContext} from "../context/TodosContext";

function TodoItemsRemaining() {
  const {todos} = useContext(TodosContext);
  const remaining = useMemo(remainingCalculation,[todos]);
  function remainingCalculation(){
    return todos.filter(todo => !todo.isComplete).length
  }

  return (
      <span>{remaining} items remaining</span>
  )
}

export default TodoItemsRemaining