import React from 'react'
import PropTypes from "prop-types";

TodoItemsRemaining.prototype={
  remaining: PropTypes.number.isRequired,
}
function TodoItemsRemaining(props) {
  return (
      <span>{props.remaining} items remaining</span>
  )
}

export default TodoItemsRemaining