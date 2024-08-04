import React, {useState} from 'react'
import PropTypes from "prop-types";
import TodoItemsRemaining from "./TodoItemsRemaining";
import TodoClearCompleted from "./TodoClearCompleted";
import CompleteAllTodos from "./CompleteAllTodos";
import TodoFilters from "./TodoFilters";
import useToggle from "../hooks/useToggle";

 TodoList.prototype = {
    todos: PropTypes.array.isRequired,
    completeTodo: PropTypes.func.isRequired,
    markAsEditing: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    todosFiltered: PropTypes.func.isRequired,
}
function TodoList(props) {
    const [filter,setFilter] = useState('all')
    const [isFeatureOneVisible,setFeatureOneVisible] = useToggle();
    const [isFeatureTwoVisible,setFeatureTwoVisible] = useToggle(false);

  return (
      <>
        <ul className="todo-list">
          {props.todosFiltered(filter).map((todo) => (
              <li key={todo.id} className="todo-item-container">
                <div className="todo-item">
                  <input
                      checked={todo.isComplete}
                      type="checkbox"
                      onChange={() => props.completeTodo(todo.id)}
                  />
                  {!todo.isEditing ? (
                      <span
                          onDoubleClick={() => props.markAsEditing(todo.id)}
                          className={`todo-item-label ${todo.isComplete ? 'line-through' : ''}`}
                      >
                        {todo.title}
                      </span>
                  ) : (
                      <input
                          onBlur={event => props.updateTodo(event, todo.id)}
                          onKeyDown={event => {
                            if (event.key === 'Enter') {
                              props.updateTodo(event, todo.id);
                            } else if (event.key === 'Escape') {
                              props.cancelEdit(event, todo.id);
                            }
                          }}
                          type="text"
                          className="todo-item-input"
                          defaultValue={todo.title}
                          autoFocus
                      />
                  )}
                </div>
                <button onClick={() => props.deleteTodo(todo.id)} className="x-button">
                  <svg
                      className="x-button-icon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
          ))}
        </ul>

          <div className="toggle-container">
              <button
                  onClick={setFeatureOneVisible} className="button">Feature One Toggle</button>
              <button
                  onClick={setFeatureTwoVisible} className="button">Feature Two Toggle</button>
          </div>

          { isFeatureOneVisible && (
            <div className="check-all-container">
              <div>
                <CompleteAllTodos />
              </div>
                <TodoItemsRemaining />
            </div>
          )}

          { isFeatureTwoVisible && (
            <div className="other-buttons-container">
                <TodoFilters
                filter={filter}
                setFilter={setFilter}
                todosFiltered={props.todosFiltered}
                />
              <div>
                  <TodoClearCompleted clearCompleted={props.clearCompleted} />
              </div>
            </div>
          )}
      </>
  )
}

export default TodoList