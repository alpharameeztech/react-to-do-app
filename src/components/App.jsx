import './reset.css';
import './App.css';
import {useEffect, useRef, useState} from "react";
import './Notodos';
import Notodos from "./Notodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useLocalStorage from "../hooks/useLocalStorage";
import {TodosContext} from "../context/TodosContext";

function App() {
  const [todos,setTodos] = useLocalStorage('todos',[
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Take over world',
      isComplete: false,
      isEditing: false,
    },
  ]);
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: 'Finish React Series',
  //     isComplete: false,
  //     isEditing: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'Go Grocery',
  //     isComplete: true,
  //     isEditing: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'Take over world',
  //     isComplete: false,
  //     isEditing: false,
  //   },
  // ]);

  const [filter,setFilter] = useState('all');

  const [idForTodo, setIdForTodo] = useLocalStorage('idForTodo',4);

  // const [name,setName] = useState();
  const [name,setName] = useLocalStorage('name','');

  const nameInputEl = useRef();



  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function completeTodo(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function markAsEditing(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function updateTodo(event, id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }
        todo.title = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function cancelEdit(event, id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = false;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function todosFiltered(){
    if(filter === 'all'){
      return todos;
    }else if(filter === 'active'){
      return todos.filter(todo => !todo.isComplete);
    }else if(filter === 'complete'){
      return todos.filter(todo => todo.isComplete);
    }
  }
  function handleNameInput(event) {
    const newName = event.target.value;
    setName(newName);
    // localStorage.setItem('name', JSON.stringify(newName));
  }

  useEffect(() => {

    // setName(JSON.parse(localStorage.getItem('name')) ?? '')

    //this will run when any component unmount
    return function cleaningUp(){
      console.log('cleaning up');
    }
  }, []);

  useEffect(() => {
    console.log('use effect')
  }, [todos]);

  return (
      <TodosContext.Provider value={{
        todos,
        setTodos,
        idForTodo,
        setIdForTodo,
        todosFiltered,
        filter,
        setFilter
      }}>
        <div className="todo-app-container">
        <div className="todo-app">
          <div className="name-container">
            <h2>What is your name?</h2>
            <form action='#'>
              <input
                  type="text"
                  ref={nameInputEl}
                  className="todo-input"
                  placeholder="What is your name?"
                  value={name}
                  onChange={handleNameInput}
              />
            </form>
            {name && ( <p>My name is {name}</p>)}

          </div>
          <h2>Todo App</h2>
          <TodoForm/>
          {todos.length > 0 ? (
              <TodoList
                  todos={todos}
                  completeTodo={completeTodo}
                  markAsEditing={markAsEditing}
                  updateTodo={updateTodo}
                  cancelEdit={cancelEdit}
                  deleteTodo={deleteTodo}
              />
          ) : (
              <Notodos />
          )}
        </div>
      </div>
      </TodosContext.Provider>
  );
}

export default App;
