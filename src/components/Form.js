import React, { useState } from 'react'

function Form({setText, setTodos, text, todos, setStatus}) {
  // fecthing the value from the event and setting state text
  const inputTextHandler = (e) => {
    setText(e.target.value)
  }
  // prevents refreshing on input when button clicked
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { 
        text: text,
        completed: false,
        id: Math.floor(Math.random() * 1000)
      }
    ])
    setText('');
  }
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <div>
        <form action="">
            <input 
             value = {text} onChange={inputTextHandler} 
              type="text" className='todo-input'/>
             <button onClick={submitTodoHandler} className="todo-button" type="submit">
               <i className='fas fa-plus-square'></i>
             </button>
              <div className="select">
                <select onChange={statusHandler} name="todos"
                className="filter-todo">
                  <option value="all">All</option>
                  <option value="complete">Complete</option>
                  <option value="incomplete">Incomplete</option>
                </select>
              </div>
        </form>
    </div>
  )
}

export default Form