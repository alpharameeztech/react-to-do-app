import React from 'react'
import PropTypes from "prop-types";

TodoFilters.prototype = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
    todosFiltered: PropTypes.func.isRequired
}
function TodoFilters(props) {
  return (
      <div>
          <button
              onClick={()=> {
                  props.setFilter('all')
                  props.todosFiltered('all')
              }}

          className={`button filter-button ${props.filter === 'all' ? 'filter-button-active' : ''}`}
          >
              All
          </button>
          <button
              onClick={()=> {
                  props.setFilter('active')
                  props.todosFiltered('active')

              }}
              className={`button filter-button ${props.filter === 'active' ? 'filter-button-active' : ''}`}
              >Active</button>
          <button
              onClick={()=> {
                  props.setFilter('complete')
                  props.todosFiltered('complete')
              }}

              className={`button filter-button ${props.filter === 'all' ? 'filter-button-active' : ''}`}
          >Completed</button>
      </div>
  )
}

export default TodoFilters