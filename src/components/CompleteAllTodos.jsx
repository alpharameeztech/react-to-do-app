import React from 'react'

function CompleteAllTodos(props) {
  return (
      <div onClick={props.completeAllTodos} className="button">Check All</div>
  )
}

export default CompleteAllTodos