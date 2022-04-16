import React, { useState, useEffect } from "react";
import './App.css';

//components
import Form from "./components/form";
import TodoList from "./components/todolist";

function App() {


  

  const [inputText, setInputText] = useState("");
  const [todos, setTodos ] = useState([]);

  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  //events




  function filterHandler(){
    switch(status){
      case 'completed':
          setFilterTodos(todos.filter(todo => todo.completed === true));
          break;

      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;

      default:
        setFilterTodos(todos);
        break;

    }
  }


    //USEEFFECT

    useEffect(() =>{
      filterHandler();
    }, [todos, status]);
  


  return (
    <div className="App">
      <header>
        <h1>
         Basic Todo List 
      </h1>
      </header>

      <Form 
        inputText = {inputText} 
        todos = {todos} 
        setTodos = {setTodos} 
        setInputText={setInputText}
        setStatus = {setStatus}
        
        />
      <TodoList
        todos = {todos}
        setTodos= {setTodos}
        filterTodos = {filterTodos}
        />
     

    </div>
  );
}

export default App;
