import React, {useState} from 'react'
import PropTypes from "prop-types";

TodoForm.prototype = {
    addTodo: PropTypes.func
}
function TodoForm(props) {
    const [todoInput, setTodoInput] = useState('');
    function handleInput(event) {
        setTodoInput(event.target.value);
    }
     function handleSubmit(event){
         event.preventDefault();

         if (todoInput.trim().length === 0) return;

         props.addTodo(todoInput);
         setTodoInput('');
    }
  return (
      <form onSubmit={handleSubmit} action="#">
        <input
            value={todoInput}
            onChange={handleInput}
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
        />
      </form>
  )
}

export default TodoForm