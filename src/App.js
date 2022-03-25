import React from "react" 
import {useState, useEffect} from "react";
import './App.css';
import List from "./components/List";
import Form from "./components/Form";

function App() {
  // States
  const[text, setText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  // run once
  useEffect(() => {
    getLocalTodos()
  }
  , [])
  // Effect
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  },[todos, status])
  // Functions
  const filterHandler = () => {
    switch(status){
      // taking the todos and filtering them to see if they are completed
      case 'complete' :
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'incomplete' :
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default :
        setFilteredTodos(todos)
        break
    }
  }
  // local storage 
  const saveLocalTodos = () => {
    // if we have something save it to local storage
      localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    // check if we have something
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(
        localStorage.getItem('todos', JSON.stringify(todos)))
        setTodos(todoLocal)
    }
  }
return (
    <div className="App">
      <header>
        <h1>Mohamed's To-Do List</h1>
      </header>
      <Form text = {text} setText = {setText} setTodos = {setTodos} todos = {todos}
      setStatus={setStatus}/>
      <List todos ={todos} setTodos ={setTodos}
      setStatus = {setStatus}
      filteredTodos ={filteredTodos}/>
    </div>
  );
}

export default App;
