import './reset.css';
import './App.css';
import {useEffect, useRef, useState} from "react";
import './Notodos';
import Notodos from "./Notodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useLocalStorage from "../hooks/useLocalStorage";
import {TodosContext} from "../context/TodosContext";
import {CSSTransition, SwitchTransition} from "react-transition-group";

function App() {
  const [todos,setTodos] = useLocalStorage('todos',[
    {
      id: 1,
      title: 'Play table tennis',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Go for Grocery',
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

  const [filter,setFilter] = useState('all');

  const [idForTodo, setIdForTodo] = useLocalStorage('idForTodo',4);

  // const [name,setName] = useState();
  const [name,setName] = useLocalStorage('name','');

  const nameInputEl = useRef();



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
            <CSSTransition
                in={name.length > 0}
                timeout={300}
                classNames="slide-horizontal"
                unmountOnExit
            >
            <p>Hello {name}</p>
            </CSSTransition>
          </div>
          <h2>Todo App</h2>
          <TodoForm/>

          <SwitchTransition mode="out-in">
            <CSSTransition
                key={todos.length}
                timeout={300}
                classNames="slide-vertical"
                unmountOnExit
            >
              {todos.length > 0 ? <TodoList /> : <Notodos /> }
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      </TodosContext.Provider>
  );
}

export default App;
